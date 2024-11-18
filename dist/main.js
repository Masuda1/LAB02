"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = require("./Funcionario");
const Empresa_1 = require("./Empresa");
function testarEmpresa() {
    const empresa = new Empresa_1.Empresa();
    const funcionario1 = new Funcionario_1.Funcionario(101, 'Alice Silva', 'Desenvolvedora', 5000);
    const funcionario2 = new Funcionario_1.Funcionario(102, 'Bruno Costa', 'Analista', 4000);
    const funcionario3 = new Funcionario_1.Funcionario(103, 'Carla Souza', 'Gerente', 7000);
    empresa.adicionarFuncionario(funcionario1);
    empresa.adicionarFuncionario(funcionario2);
    empresa.adicionarFuncionario(funcionario3);
    const consulta = empresa.consultarFuncionario(102);
    if (consulta) {
        console.log(`Funcionário encontrado: ${consulta.nome}, Cargo: ${consulta.cargo}, Salário: ${consulta.salario}`);
    }
    empresa.atualizarSalario(101, 5500);
    const consultaAtualizada = empresa.consultarFuncionario(101);
    if (consultaAtualizada) {
        console.log(`Salário atualizado de ${consultaAtualizada.nome}: ${consultaAtualizada.salario}`);
    }
    empresa.consultarFuncionario(104);
}
testarEmpresa();
//# sourceMappingURL=main.js.map