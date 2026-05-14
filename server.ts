import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory store for bookings:
  // Key: Date string (YYYY-MM-DD)
  // Value: Array of booked time slots
  const bookingsStore: Record<string, string[]> = {};

  // API to get available slots for a date
  app.get("/api/bookings", (req, res) => {
    const { date } = req.query;
    if (!date || typeof date !== "string") {
      res.status(400).json({ error: "Date is required" });
      return;
    }
    const bookedSlots = bookingsStore[date] || [];
    res.json({ bookedSlots });
  });

  // API to create a booking
  app.post("/api/bookings", (req, res) => {
    const { name, phone, email, vehicle, service, date, time } = req.body;
    
    if (!date || !time) {
      res.status(400).json({ error: "Date and time are required" });
      return;
    }

    if (!bookingsStore[date]) {
      bookingsStore[date] = [];
    }

    if (bookingsStore[date].includes(time)) {
      res.status(400).json({ error: "Time slot is already booked" });
      return;
    }

    // Book the slot
    bookingsStore[date].push(time);
    console.log(`New booking: ${name} on ${date} at ${time} for ${service}`);

    res.json({ success: true, message: "Booking confirmed" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
