import sys
import json
import ast #

data_send = "Hello js, I'm py"

# String #
# input = sys.argv[1]
# output = data_send
# print(output)

# List
# input = ast.literal_eval(sys.argv[1])
# output = input
# output.append(data_send)
# print(json.dumps(output))


# OBJ
input = ast.literal_eval(sys.argv[1])
output = input
output['py_data'] = data_send
print(json.dumps(output))



async def f():
    print('f is running')
    return 42


sys.stdout.flush()
