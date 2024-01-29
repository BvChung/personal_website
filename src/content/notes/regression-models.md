---
title: "Machine Learning | Regression Models"
publishedDate: 2024-01-03
publishedTime: "3:55 PM"
description: "Notes about regression models."
slug: "regression-models"
---

Regression is a statistical approach used to model the relationship between a dependent variable and a set of independent variables. It is a supervised machine learning technique that makes predictions based on a set of features or independent variables in a dataset. Linear coefficients of each parameter and the y-intercept are approximated through training the models with a set of training data. The final model is chosen based on which model minimizes the sum of squared residuals.

<br/>

# Model Selection Based on Performance

> $$MSE  = \dfrac 1n \displaystyle\sum_{i = 1}^n (y_{i} - f(x_{i}))^2$$

- Mean squared error or 'quality of fit' quantifies how well the model is able to predict values based on input feature vectors. It assesses the average squared difference between the actual and estimated values. The smaller the MSE, the closer the fit is to the data indicating a better model.

---

# Measuring Regression Model Accuracy

> $$R^2  = \dfrac {TSS - RSS}{TSS} = 1 - \dfrac {{RSS}}{TSS}$$

> $$RSS  = \displaystyle\sum_{i = 1}^n (y_{i} - f(x_{i}))^2$$

> $$TSS  = \displaystyle\sum_{i = 1}^n (y_{i} - \bar{y})^2$$

- Coefficient of Determination ($R^2$) serves as a metric in assessing the effectiveness of a fitted regression line in accurately representing the distribution of data points between a range 0 - 1.
- Sum of Squared Residuals (RSS) measures the amount of variabilty that is left unexplained after performing regression. It is calculated by taking the sum of the squared difference between the actual value minus the predicted value.
- Total Sum of Squares (TSS) measures the inherent total variance in the response ($$Y$$) variable. Is is calculated by taking the sum of the squared difference between each individual y value minus the mean all response data points.
- $$TSS - RSS$$ measures the amount of variability in the response that is explained through regression.
- $$RSS / TSS$$ is the proportion of the variance that explained by the model. RSS aims to reduce the variance of the response variable and if it performs well then the RSS / TSS ratio will be small.

> $$RSE = \sqrt{\dfrac {1}{n - 2} * RSS}$$

- Residual Standard Error (RSE) measures the standard deviation of the residuals providing an measure of the lack of fit of the model. It represents how much that the response will deviate from the true regression line. A good regression model will minimize the Residual Standard Error (RSE).

---

# Ordinary Least Squares Linear Regression

> $$y = B_0 + B_{p}x_{p} + \epsilon$$

- Linear coefficients ($$B_px$$) of each parameter represent the increase or decrease in the dependent variable for each unit change in the independent variable.
- The intercept ($$B_0$$) represents the average value of the dependent variable when all independent variables are set to 0.
- The error term ($$\epsilon$$) represents the variation in predicting the dependent variable that cannot be explained or reduced, as it is beyond our control.

---

# Ridge Regression

> $$\displaystyle\sum_{i = 1}^n (y_{i} - f(x_{i}))^2 + \lambda \displaystyle\sum_{j = 1}^p \beta_j^2$$

- Ridge regression is used to fit a line to our training data with a small amount of bias to prevent overfitting. In return for that small amount of bias we get a significant drop in variance resulting in a slightly worse fit Ridge regression that can provide better long-term predictions.
- Ridge regression imposes a penalty on the size of the coefficients. We minimize a penalized residual sum of squares plus $\lambda * slope^2$. As lamda increases the penalty also increases, in order to minimize the sum of squared residuals we shrink the parameter coefficients which can only asymptotically approach zero.
- The $\lambda$ parameter controls the amount of shrinkage: the larger the value of $\lambda$, the greater the amount of shrinkage and thus the coefficients become more robust to collinearity.
- Ridge regression is better when most of the independent variables are useful.

---

# Lasso Regression

> $$\displaystyle\sum_{i = 1}^n (y_{i} - f(x_{i}))^2 + \lambda \displaystyle\sum_{j = 1}^p |\beta_j|$$

- Lasso regression is similar to Ridge regression in that it also introduces a small amount of bias into how the new line is fit to the data but in return for that small amount of bias we get a significant drop in variance in other words by starting with a slightly worse fit Lasso regression can provide better long-term predictions.
- Similar to Ridge regression, Lasso regression imposes a penalty on the size of the coefficients. The lasso coefficients minimize a penalized residual sum of squares plus $\lambda * slope$. However, in contrast to Ridge regression, Lasso regression can shrink the coefficients to zero.
- Lasso Regression tends to make coefficients of less important features zero thus effectively performing feature selection.
