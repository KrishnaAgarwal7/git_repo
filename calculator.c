#include <stdio.h>
#include <math.h>
int main()
{
  char operator = '\0';
  float num1 = 0;
  float num2 = 0;
  float result;
  printf("Which operation would you like to perform? (+ , - , * , /)");
  scanf("%c", &operator);
  printf("Enter first number:");
  scanf("%f", &num1);
  printf("Enter second number:");
  scanf("%f", &num2);

  float sum , subtract , multiply , divide;
  sum = num1 + num2;
  subtract = num1 - num2;
  multiply = num1 * num2;
  divide = num1 / num2;

  // below i used if & else if
  /*if (operator == '+')
  {
    float sum = num1 + num2;
    printf("The sum of %f & %f is %f", num1, num2, sum);
  }
  else if (operator == '-')
  {
    float subtract = num1 - num2;
    printf("The difference between %f & %f is %f", num1, num2, subtract);
  }
  else if (operator == '*')
  {
    float multiply = num1 * num2;
    printf("The multiplication of %f & %f is %f", num1, num2, multiply);
  }
  else if (operator == '/')
  {
    float divide = num1 / num2;
    printf("The divison of %f & %f is %f", num1, num2, divide);
  }
  */
// here i used switch
    switch (operator)
    {
    case '+':
      printf("The sum of %f & %f is %f", num1, num2, sum);
      break;

    case '-':
      printf("The difference between %f & %f is %f", num1, num2, subtract);
      break;

    case '*':
      printf("The multiplication of %f & %f is %f", num1, num2, multiply);
      break;

    case '/':
      printf("The divison of %f & %f is %f", num1, num2, divide);
      break;
    
    default:
      printf("Please give a valid input");
      break;
    }

  return 0;
}
