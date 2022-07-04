

### TEST CASE 1 : SEARCHING, FILTERING AND SENDING A REVIEW IN [Adidas](https://www.Adidas.es)

\
The requirements of this test case with [Cypress](https://www.cypress.io/) are the following :

1. Go to [Adidas](https://www.Adidas.es).
2. Click on the search text field (where the magnifying glass is).
3. Perform the following search "Ultraboost".
4. In the search results, select the following filters:
5. Gender: Female.
6. Sports: Running
7. Surface: Road
8. Color: Black.
9. Choose the second result shown.
10. Open the "Size guide" (the pop up window).
11. Click on HOW TO FIND YOUR SIZE
12. Click on "Back to top".
13. Click on the "Inches" selector
14. Click again on "cm".
15. Close the pop up.
16. Scroll down the page until the "VALUATIONS" section appears.
17. Click to open the "VALUATIONS" section.
18. Click on "Write a review".
19. Overall Rating: 5 stars
20. Would you recommend this product: Yes
21. Share your opinion.what makes this product stand out?: Write "I love them, with these shoes you finish marathons like you wouldn't even know it."
22. What is your opinion in one sentence: "Great".
23. Does it fit true to size? True to size.
24. Is the last the right width? Perfect.
25. How do you rate the comfort? 3 stars.
26. How do you rate the quality? 4 stars.
27. Nickname: Ibai
28. Email: We leave it blank.
29. Click on Send Review
30. We make an assertion by checking that the following error is displayed on the screen: "Wait! You can't leave this field blank."
If this assertion is checked, the test case is successfully validated.


<p>To complete this QA test case I have used VSC as an IDE and have built the test case using Cypress.io and deployed it into Github. If you would love to run this test in your own instace, follow the below steps :</p>

1. Open your code Editor.
2. clone the repo : https://github.com/SaraSanchezzz/TestCase1.git or download the folder on your PC and open it directly in your code editor.
3. Ensure you have Node.js Installed.
3. Install cypress : npm install cypress --save-dev and follow further steps at cypress website: [Cypress](https://www.cypress.io/). 
4. Run tests : npx cypress open. 



-------------------------

### TEST CASE 1 : BUSCAR, FILTRAR Y ENVIAR REVIEW EN [Adidas](https://www.Adidas.es)

\
Los requerimientos estipulados para este test case con [Cypress](https://www.cypress.io/) son los siguientes:

1. Ve a [Adidas](https://www.Adidas.es).
2. Clic en el campo de texto de búsqueda (donde está la lupa).
3. Realiza la siguiente búsqueda “Ultraboost”
4. En los resultados de búsqueda, selecciona los siguientes filtros:
5. Sexo: Mujer.
6. Deportes: Running
7. Superficie: Carretera
8. Color: Negro.
9. Elige el segundo resultado mostrado.
10. Abre la “Guía de tallas" (el pop up window).
11. Clic en CÓMO SABER TU TALLA
12. Clic en "Volver al principio”.
13. Clic en el selector “Pulgadas”
14. Clic de nuevo a “cm”
15. Cierra el pop up.
16. Haz scroll en la página hasta que aparezca el apartado "VALORACIONES”.
17. Clic para abrir el apartado “VALORACIONES"
18. Clic en "Escribir una reseña”
19. Valoración general: 5 estrellas
20. Recomendarías este producto?: Sí
21. Comparte tu opinión.¿Qué hace que esté product destaque?: Escribir “Me encantan, con estas zapatillas terminas las maratones que ni te enteras.”
22. ¿Cuál es tu opinión en una frase?: “Geniales”
23. ¿Está acorde con su talla? Fiel a la talla.
24. ¿La horma tiene el ancho adecuado? Perfecto.
25. ¿Cómo valoras la comodidad? 3 estrellas.
26. ¿Cómo valoras la calidad? 4 estrellas.
27. Apodo: Ibai
28. Correo electrónico: Lo dejamos en blanco.
29. Le damos a Enviar Reseña
30. Hacemos una aserción comprobando que se muestre el siguiente error en pantalla: "¡Espera! No puedes dejar en blanco este campo.”
Si se comprueba esta aserción, se valida correctamente el test case.

<p>
Para llevar a cabo y completar este test case he usado Visual Studio Code como entorno de desarrollo y Cypress como herramienta de automatización de testeo. Para poder llevar a cabo este test en tu propio entorno de desarrollo, puedes seguir los siguientes pasos: </p>

1. Abre el  editor de código.
2. clone  repo : https://github.com/SaraSanchezzz/TestCase1.git o descargar el repositorio y abirlo en tu editor de código.
3. Comprueba que tienes instalado Node.js.
3. Instala cypress : npm install cypress --save-dev para más información entra aqui. [Cypress](https://www.cypress.io/). 
4. Para comenzar comprobar test : npx cypress open. 

