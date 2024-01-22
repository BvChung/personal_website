---
title: "Machine Learning | Regression Models"
publishedDate: 2024-01-03
publishedTime: "3:55 PM"
description: "Notes about regression models."
slug: "regression-models"
---

Regression is a statistical approach used to model the relationship between a dependent variable and a set of independent variables. It is a supervised machine learning technique that makes predictions based on a set of features or independent variables in a dataset.

<br/>

# Ordinary Least Squares Linear Regression

> $$y = B_0 + B_{p}x_{p} + \epsilon$$

- Linear coefficients ($$B_1x$$) represent the increase or decrease in the dependent variable for each unit change in the independent variable.
- The intercept ($$B_0$$) represents the average value of the dependent variable when all independent variables are set to 0.
- The error term ($$\epsilon$$) represents the variation in predicting the dependent variable that cannot be explained or reduced, as it is beyond our control.

# Measuring Performance

> $$R^2  = 1 - \dfrac {{RSS}}{TSS}$$

> $$RSS  = \displaystyle\sum_{i = 1}^n (y_{i} - f(x_{i}))^2$$

> $$TSS  = \displaystyle\sum_{i = 1}^n (y_{i} - \bar{y})^2$$

- Coefficient of Determination ($R^2$) serves as a metric in assessing the effectiveness of a fitted regression line in accurately representing the distribution of data points.
- Sum of Squared Residuals (RSS) is calculated by taking the sum of the squared difference of each $$i^{th}$$ value of the variable to be predicted minus the predicted $$y_i$$ value.
- Total Sum of Squares (TSS) is calculated by taking the sum of the squared difference between each individual value minus the mean of all data points.
- A good regression model will minimize the Sum of Squared Residuals (RSS) and maximize the Total Sum of Squares (TSS) which will result in a $R^2$ value closer to 1.

> $$MSE  = \dfrac 1n \displaystyle\sum_{i = 1}^n (y_{i} - f(x_{i}))^2$$

- Mean squared error quantifies how well the model is able to predict values based on input feature vectors. It assesses the average squared difference between the actual and estimated values. A lower MSE indicates a better fit of the model to the data.

> $$MAE  = \dfrac 1n \displaystyle\sum_{i = 1}^n |y_{i} - f(x_{i})|$$

- Mean Absolute Error (MAE) measures the average magnitude of the errors in a set of predictions, without considering their direction. It is calculated by taking the average of the absolute difference between the actual and predicted values. A good regression model minimizes the MAE.

---

# Ridge Regression

> $$min(\displaystyle\sum_{i = 1}^n (y_{i} - f(x_{i}))^2 + \lambda \displaystyle\sum_{j = 1}^p \beta_j^2)$$

- Ridge regression is used to fit a line to our training data with a small amount of bias to prevent overfitting. In return for that small amount of bias we get a significant drop in variance resulting in a slightly worse fit Ridge regression that can provide better long-term predictions.
- Ridge regression imposes a penalty on the size of the coefficients. We minimize a penalized residual sum of squares plus $\lambda * slope^2$. As lamda increases the penalty also increases, in order to minimize the sum of squared residuals we shrink the parameter coefficients which can only asymptotically approach zero.
- The $\lambda$ parameter controls the amount of shrinkage: the larger the value of $\lambda$, the greater the amount of shrinkage and thus the coefficients become more robust to collinearity.
- Ridge regression is better when most of the independent variables are useful.

---

# Lasso Regression

> $$min(\displaystyle\sum_{i = 1}^n (y_{i} - f(x_{i}))^2 + \lambda \displaystyle\sum_{j = 1}^p |\beta_j|)$$

- Lasso regression is similar to Ridge regression in that it also introduces a small amount of bias into how the new line is fit to the data but in return for that small amount of bias we get a significant drop in variance in other words by starting with a slightly worse fit Lasso regression can provide better long-term predictions.
- Similar to Ridge regression, Lasso regression imposes a penalty on the size of the coefficients. The lasso coefficients minimize a penalized residual sum of squares plus $\lambda * slope$. However, in contrast to Ridge regression, Lasso regression can shrink the coefficients to zero.
- Lasso Regression tends to make coefficients of less important features zero thus effectively performing feature selection.
