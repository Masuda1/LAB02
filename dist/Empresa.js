"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
class Empresa {
    constructor() {
        this.funcionarios = [];
    }
    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
        console.log(`Funcionário ${funcionario.nome} adicionado com sucesso.`);
    }
    atualizarSalario(matricula, salario) {
        const funcionario = this.funcionarios.find(f => f.matricula === matricula);
        if (!funcionario) {
            console.error(`Funcionário com matrícula ${matricula} não encontrado.`);
            return;
        }
        funcionario.salario = salario;
        console.log(`Salário de ${funcionario.nome} atualizado para ${salario}.`);
    }
    consultarFuncionario(matricula) {
        const funcionario = this.funcionarios.find(f => f.matricula === matricula);
        if (!funcionario) {
            console.error(`Funcionário com matrícula ${matricula} não encontrado.`);
            return undefined;
        }
        return funcionario;
    }
}
exports.Empresa = Empresa;
//# sourceMappingURL=Empresa.js.map