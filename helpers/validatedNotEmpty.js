export default function validatedNotEmpty(data) {
  return new Promise((resolve) => {
    data ? resolve(true) : resolve(false);
  });
}
