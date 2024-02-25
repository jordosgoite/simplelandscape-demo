export const getProductDate = (actual = true) => {
  const currentDate = new Date();
  const pastDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() - 1
  );
  const dia = actual ? currentDate.getDate() : pastDate.getDate();
  const mes = actual ? currentDate.getMonth() + 1 : pastDate.getMonth() + 1;
  const año = actual ? currentDate.getFullYear() : pastDate.getFullYear();
  const fechaFormateada = `${dia}-${mes}-${año}`;
  return fechaFormateada;
};
