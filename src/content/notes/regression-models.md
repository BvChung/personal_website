---
title: "Machine Learning | Regression Models"
publishedDate: 2024-01-03
publishedTime: "3:55 PM"
description: "Notes about regression models."
slug: "regression-models"
---

Regression is a statistical approach for modeling the relationship between a dependent variable with a set of independent variables. It is used for predicting a continuous value based on the relationship between the dependent and given independent variables.

<br/>

# Ordinary Least Squares Linear Regression

> $$y = B_0 + B_1x_1$$

- Linear coeefficients ($$B_1x$$) represent the increase or decrease in the dependent variable for a unit change in the independent variable.
- The intercept ($$B_0$$) represents the mean value of the dependent variable when all independent variables are equal to 0.
- The error term ($$\epsilon$$) represents the unexplained variation in the dependent variable.

# Measuring Performance

> $$R^2  = 1 - \dfrac {{RSS}}{TSS}$$

> $$RSS  = \displaystyle\sum_{i = 1}^n (y_{i} - f(x_{i}))^2$$

> $$TSS  = \displaystyle\sum_{i = 1}^n (y_{i} - \bar{y})^2$$

- Coefficient of Determination ($R^2$) serves as a metric in assessing the effectiveness of a fitted regression line in accurately representing the distribution of data points.
- Sum of Squared Residuals (RSS) is calculated by taking the sum of the squared difference of each $$i^{th}$$ value of the variable to be predicted minus the predicted $$y_i$$ value.
- Total Sum of Squares (TSS) is calculated by taking the sum of the squared difference between each individual value minus the mean of all data points.
- A good regression model will minimize the Sum of Squared Residuals (RSS) and maximize the Total Sum of Squares (TSS) which will result in a $R^2$ value closer to 1.

> $$MSE  = \dfrac 1n \displaystyle\sum_{i = 1}^n (y_{i} - f(x_{i}))^2$$

- Mean squared error measures the amount of error in statistical models. It assesses the average squared difference between the observed and predicted values. A good regression model minimizes the MSE.

> $$MAE  = \dfrac 1n \displaystyle\sum_{i = 1}^n |y_{i} - f(x_{i})|$$

- Mean Absolute Error (MAE) measures the average magnitude of the errors in a set of predictions, without considering their direction. It is calculated by taking the average of the absolute difference between the actual and predicted values. A good regression model minimizes the MAE.

---

# Ridge Regression

> $$min(\displaystyle\sum_{i = 1}^n (y_{i} - f(x_{i}))^2 + \lambda \displaystyle\sum_{j = 1}^p \beta_j^2)$$

- The main idea behind Ridge regression is to find a new line that doesn't fit the training data by introducing a small amount of bias into how the new line is fit to the data. In return for that small amount of bias we get a significant drop in variance in other words by starting with a slightly worse fit Ridge regression can provide better long-term predictions
- Ridge regression imposes a penalty on the size of the coefficients. We minimize a penalized residual sum of squares plus $\lambda * slope^2$. As lamda increases the penalty also increases, in order to minimize the sum of squared residuals we shrink the parameter coefficients which can only asymptotically approach zero.
- The $\lambda$ parameter controls the amount of shrinkage: the larger the value of $\lambda$, the greater the amount of shrinkage and thus the coefficients become more robust to collinearity.
- Ridge regression is better when most of the independent variables are useful.

---

# Lasso Regression

> $$min(\displaystyle\sum_{i = 1}^n (y_{i} - f(x_{i}))^2 + \lambda \displaystyle\sum_{j = 1}^p |\beta_j|)$$

- Lasso regression is similar to Ridge regression in that it also introduces a small amount of bias into how the new line is fit to the data but in return for that small amount of bias we get a significant drop in variance in other words by starting with a slightly worse fit Lasso regression can provide better long-term predictions
- Similar to Ridge regression, Lasso regression imposes a penalty on the size of the coefficients. The lasso coefficients minimize a penalized residual sum of squares plus $\lambda * slope$. However, in contrast to Ridge regression, Lasso regression can shrink the coefficients to zero.
- Lasso Regression tends to make coefficients of less important features zero thus effectively performing feature selection.
