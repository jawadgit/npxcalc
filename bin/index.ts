#!/usr/bin/env node

import { question } from 'readline-sync';

function calculator(): string {
    const firstNum: string = question('enter first number: ');
    const checkNum = checkValidNum(firstNum);
    const secNum: string = question('enter second number: ');
    const checkSecNum = checkValidNum(secNum);
    const operator: string = question('operator [+ , - , / , * ]: ');
    const checkOperator = checkValidOperator(operator);
    if (checkNum == false || checkSecNum == false || checkOperator == false) {
        console.log('invalid input exiting');
        return "invalid input exiting";
    } else {
        console.log(applyOperator(parseInt(firstNum), parseInt(secNum), operator));
    }
    return 'result';
}


function applyOperator(firstNum: number, secNum: number, operator: string) {
    switch (operator) {
        case '+':
            return firstNum + secNum;
        case '-':
            return firstNum - secNum;
        case '*':
            return firstNum * secNum;
        case '/':
            return firstNum / secNum;
    }
}

function checkValidNum(num: string): boolean {
    return !isNaN(parseInt(num));
}

function checkValidOperator(operator: string): boolean {
    if (operator == '+' || operator == '-' || operator == '*' || operator == '/') {
        return true;
    } else {
        return false;
    }

}

calculator();