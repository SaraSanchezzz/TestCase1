

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


<p>To complete this QA test case I have used VSC as an IDE and have built the test case using Cypress.io and deployed it to Github. </p>

