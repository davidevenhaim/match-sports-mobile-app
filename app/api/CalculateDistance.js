// distance calculation in KM
// using Haversine formula.

export default function computeDistance(
  { lat: prevLat, lng: prevLong },
  { lat, lng: long }
) {
  const prevLatInRad = toRad(prevLat);
  const prevLongInRad = toRad(prevLong);
  const latInRad = toRad(lat);
  const longInRad = toRad(long);

  return (
    // In kilometers
    6377.830272 *
    Math.acos(
      Math.sin(prevLatInRad) * Math.sin(latInRad) +
        Math.cos(prevLatInRad) *
          Math.cos(latInRad) *
          Math.cos(longInRad - prevLongInRad)
    )
  );
}

function toRad(angle) {
  return (angle * Math.PI) / 180;
}
