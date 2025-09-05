#include <stdio.h>
#include <math.h>

int main()
{
  int input;

  printf("Weight Conversion Calculator\n");
  printf("1:Kilograms to Pounds\n");
  printf("2:Pounds to Kilogram\n");
  printf("Which operation would you like to perform?:(1/2)\n");
  scanf("%d", &input);

  int weight;

  printf("You have choosen OP%d\n", input);

  if (input == 1)
  {
    printf("Enter weight in Kg:");
    scanf("%d", &weight);
    float kp = weight * 2.205;

    printf("%d kg = %.2f pounds", weight, kp);
  }
  else if (input == 2)
  {
    printf("Enter weight in Pounds:");
    scanf("%d", &weight);
    float pk = weight / 2.205;
    printf("%d pounds = %.2f kg", weight, pk);
  }
  return 0;
}