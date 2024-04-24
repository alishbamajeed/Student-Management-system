#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

interface Student {
    id: number;
    name: string;
    grade: number;
}

const students: Student[] = [];

const mainMenu = () => {
    inquirer.prompt({
        type: 'list',
        name: 'option',
        message: 'Choose an option:',
        choices: [
            { name: 'Add Student', value: 'add' },
            { name: 'List Students', value: 'list' },
            { name: 'Exit', value: 'exit' }
        ]
    }).then((answer: { option: string }) => {
        switch (answer.option) {
            case 'add':
                addStudent();
                break;
            case 'list':
                listStudents();
                break;
            case 'exit':
                console.log(chalk.yellow('Goodbye!'));
                break;
            default:
                console.log(chalk.red('Invalid option'));
        }
    });
};

const addStudent = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Dear Enter student name:'
        },
        {
            type: 'number',
            name: 'id',
            message: 'Dear Enter student ID:'
        },
        {
            type: 'number',
            name: 'grade',
            message: 'Dear Enter student grade:'
        }
    ]).then((answers: Student) => {
        students.push(answers);
        console.log(chalk.green('Student added successfully!'));
        mainMenu();
    });
};

const listStudents = () => {
    console.log(chalk.blue('List of Students:'));
    students.forEach(student => {
        console.log(chalk.cyan(`Name: ${student.name}, ID: ${student.id}, Grade: ${student.grade}`));
    });
    mainMenu();
};

mainMenu();
