import Booking from "../Models/booking.js";  // Added `.js` for clarity if using ES modules

export async function handleTreckBooking(req, res) {
  try {
    const {
      destinationId,
      numPersons,
      dateSlot,
      orderId,
      paymentId,
      amountPaid
    } = req.body;

    const userId = req.user._id;
    if (!userId || !destinationId || !numPersons || !dateSlot || !dateSlot.startDate || !dateSlot.endDate || !amountPaid) {
      return res.status(400).json({ error: "Invalid or missing input fields!" });
    }

    const newBooking = await Booking.create({
      userId,
      destinationId,
      numPersons,
      dateSlot,
      orderId,
      paymentId,
      amountPaid
    });

    console.log("New booking created:", newBooking);

    return res.status(200).json({
      msg: "Trip booked successfully!",
      data: newBooking
    });

  } catch (err) {
    console.error("Booking error:", err);
    return res.status(500).json({ error: "Server error while booking trip." });
  }
}
