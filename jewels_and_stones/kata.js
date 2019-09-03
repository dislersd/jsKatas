function jewelsAndStones (J, S) {
    return [...S].reduce((count, s) => [...J].includes(s) ? ++count : count, 0);
}