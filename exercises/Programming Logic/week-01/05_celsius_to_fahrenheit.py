def celsius_to_fahrenheit(celsius):
    res = (9 / 5 * celsius) + 32
    print("The temperature in Fahrenheit is Fº", res)


celsius = input("Digit the number of degrees in Celsius: ")

celsius_to_fahrenheit(int(celsius))
