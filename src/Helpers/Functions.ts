export const codeRoomValidator = (code: string) => {
  //retorno solo de solo 3 digitos
  if (code.length > 3) return code.substring(0, 3);

  //validacion de numeros code posit 0
  if (!Number(code.substring(0, 1) && code.substring(0, 1) !== "0")) {
    console.log(code.substring(0, 1));
    return "";
  }

  //validacion de numeros code posit 1
  if (code.length > 1 && !Number(code.substring(1, 2)))
    return code.substring(0, 1);

  //revision de 3digitos
  if (code.length === 3) {
    if (Number(code.substring(1, 3))) return code.substring(0, 2);
    //revision de primeros 2 numeros y 3er digito string
    if (Number(code.substring(0, 2)) && code.substring(1, 3)) return code;
  }
};

export const formatRut = (rut) => {
  if (rut.length > 12) return rut.substring(0, 12);
  // XX.XXX.XXX-X
  const newRut = rut
    .toString()
    .replace(/\./g, "")
    .replace(/\-/g, "")
    .trim()
    .toLowerCase();
  const lastDigit = newRut.substr(-1, 1);
  const rutDigit = newRut.substr(0, newRut.length - 1);
  let format = "";
  for (let i = rutDigit.length; i > 0; i--) {
    const e = rutDigit.charAt(i - 1);
    format = e.concat(format);
    if (i % 3 === 0) {
      format = ".".concat(format);
    }
  }
  return format.concat("-").concat(lastDigit);
};
