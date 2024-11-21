// script.js

document.getElementById('processButton').addEventListener('click', () => {
  const setA = new Set(
    document.getElementById('setA').value.split(',').map(x => x.trim())
  );
  const setB = new Set(
    document.getElementById('setB').value.split(',').map(x => x.trim())
  );

  const union = new Set([...setA, ...setB]);
  const intersection = new Set([...setA].filter(x => setB.has(x)));
  const differenceAB = new Set([...setA].filter(x => !setB.has(x)));
  const differenceBA = new Set([...setB].filter(x => !setA.has(x)));

  const results = `
    <h3>Resultados:</h3>
    <p><strong>Unión (A ∪ B):</strong> {${[...union].join(', ')}}</p>
    <p><strong>Intersección (A ∩ B):</strong> {${[...intersection].join(', ')}}</p>
    <p><strong>Diferencia (A - B):</strong> {${[...differenceAB].join(', ')}}</p>
    <p><strong>Diferencia (B - A):</strong> {${[...differenceBA].join(', ')}}</p>
  `;
  document.getElementById('results').innerHTML = results;
});
