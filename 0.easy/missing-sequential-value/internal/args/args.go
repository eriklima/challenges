package args

import (
	"fmt"
	"strconv"
	"strings"
)

type Values []string

func (v *Values) String() string {
	return fmt.Sprintf("%s", strings.Join(*v, ","))
}

func (v *Values) Set(values string) error {
	splitedValues := strings.Split(values, ",")

	for _, value := range splitedValues {
		*v = append(*v, value)
	}
	
	_, error := ValuesToInt(*v)

	if error != nil {
		return error
	}

	return nil
}

func ValuesToInt(values Values) ([]int, error) {
	result := []int{}

	for _, sv := range values {
		num, error := strconv.Atoi(sv)
	
		if error != nil {
			return nil, fmt.Errorf("Invalid number: '%s'", sv)
		}

		result = append(result, num)
	}

	return result, nil
}