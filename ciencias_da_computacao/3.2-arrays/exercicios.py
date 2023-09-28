# exercicio 1
def verify(values):
    max_time = 0
    current_time = 0
    for value in values:
        if value == 1:
            current_time += 1
        else:
            current_time = 0
        if current_time >= max_time:
            max_time = current_time
    return max_time

# exercicio 2


def shuffle(cards):
    middle = (len(cards) // 2)
    suffled_cards = []
    for index in range(middle):
        suffled_cards.append(cards[index])
        suffled_cards.append(cards[middle + index])
    return suffled_cards

# def shuffle(items):
#     answer = []
#     div_cards_by_two = len(items) // 2
#     for offset in range(div_cards_by_two):
#         answer.extend(items[offset::div_cards_by_two])
#         print(items[offset::div_cards_by_two])
#         print(answer)
#     return answer

print(shuffle([1, 4, 4, 7, 6, 6]))