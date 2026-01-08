
// Matemática Básica
exports.NumeroPar = function(numero) {
    var resposta = false;
    if (numero % 2 == 0) {
        resposta = true;
    }    return resposta;
}

exports.Primo = function(primo) {
  if (primo <= 1) return false;
  for (let i = 2; i <= Math.sqrt(primo); i++) {
    if (primo % i === 0) return false;
  }
  return true;
}

exports.Fatorial = function(n) {
  if (n < 0) throw new Error("Número inválido");
  return n <= 1 ? 1 : n * fatorial(n - 1);
}

// Estatística
exports.Media = function(valores) {
  return valores.reduce((s, v) => s + v, 0) / valores.length;
}

exports.Mediana = function (mediana) {
  const ordenados = [...mediana].sort((a, b) => a - b);
  const meio = Math.floor(ordenados.length / 2);
  return ordenados.length % 2 === 0
    ? (ordenados[meio - 1] + ordenados[meio]) / 2
    : ordenados[meio];
}

exports.Moda = function(moda) {
  const contagem = {};
  moda.forEach(v => contagem[v] = (contagem[v] || 0) + 1);

  return Object.keys(contagem).reduce((a, b) =>
    contagem[a] > contagem[b] ? a : b
  );
}

// Juros
exports.JurosSimples = function(capital, taxa, tempo) {
  return capital * (1 + taxa * tempo);
}

exports.JurosComposto = function(capital, taxa, tempo) {
  return capital * Math.pow(1 + taxa, tempo);
}


// Geometria
exports.AreaQuadrado = function(lado) {
  return lado * lado;
}

exports.AreaRetangulo = function(base, altura) {
  return base * altura;
}

exports.AreaCirculo = function(raio) {
  return Math.PI * raio * raio;
}

exports.PerimetroCirculo = function(raio) {
  return 2 * Math.PI * raio;
}


exports.GrausParaRadianos = function(graus) {
  return graus * (Math.PI / 180);
}

exports.RadianosParaGrau = function(rad) {
  return rad * (180 / Math.PI);
}
