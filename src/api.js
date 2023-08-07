export async function getVans() {
  try {
    const response = await fetch("/api/vans");
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      const data = await response.json();
      return data.vans;
    }
  } catch (error) {
    console.error(error);
  }
}
