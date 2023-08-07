export async function getHostVans() {
  try {
    const response = await fetch("/api/host/vans");
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}
