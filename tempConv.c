#include <stdio.h>
int main() {

  printf("Temperature Conversion Program\n");
  printf("C. Celcius to Fahrenheit\n");
  printf("F. Fahrenheit to Celcius\n");
  printf("Is the temperature in Fahrenheit or Celcius?\n");

  char knownTemp = '\0';
  scanf("%c" , &knownTemp);

  float temp;

  if(knownTemp == 'C')
  {
    printf("Enter Temperature in Celcius:");
    scanf("%f" , &temp);
    float finalTemp = (temp*1.8+32);
    printf("%.2f degree celcius = %.2f Fahrenheit" , temp , finalTemp);
  }

  else if(knownTemp == 'F')
  {
    printf("Enter Temperature in Fahrenheit:");
    scanf("%f" , &temp);
    float finalTemp = (temp-32)*5/9;
    printf("%.2f Fahrenheit = %.2f degree Celcius" , temp , finalTemp);
  }
  



  return 0;
}