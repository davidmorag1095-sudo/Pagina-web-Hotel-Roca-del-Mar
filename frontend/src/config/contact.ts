export const whatsappMessage = "Hola, quisiera consultar disponibilidad en Hotel La Roca del Mar.";

export const contact = {
  whatsappDisplay: "+506 8896 2637",
  whatsappUrl: `https://wa.me/50688962637?text=${encodeURIComponent(whatsappMessage)}`,
  email: "olgacabr@gmail.com",
  emailUrl: "mailto:olgacabr@gmail.com",
  bookingUrl: "https://www.booking.com/hotel/cr/la-roca-del-mar.es.html",
  facebookUrl: "https://www.facebook.com/hotelrocadelmar",
  instagramUrl: "https://www.instagram.com/larocadelmar/",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+La+Roca+del+Mar+Puntarenas+Costa+Rica",
  mapEmbedUrl: "https://www.google.com/maps?q=Hotel%20La%20Roca%20del%20Mar%20Puntarenas%20Costa%20Rica&output=embed",
} as const;
