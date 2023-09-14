
def max_num(a, b):
    return max(a, b)


print(max_num(7, 23))


def med_arit(lista):
    return sum(lista)/len(lista)


print(med_arit([1, 2, 3, 4, 5, 6, 7, 8, 9]))


def ast(n):
    for row in range(n):
        print(n * '*')