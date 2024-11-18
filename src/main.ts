import { Funcionario } from './Funcionario';
import { Empresa } from './Empresa';

// Função para testar o sistema de gerenciamento de funcionários
function testarEmpresa(): void {
  const empresa = new Empresa();

  // Cadastrar funcionários
  const funcionario1 = new Funcionario(101, 'Alicia Victoria', 'Desenvolvedora', 5000);
  const funcionario2 = new Funcionario(102, 'Daniel Correa', 'Analista', 4000);
  const funcionario3 = new Funcionario(103, 'Gabriel Rodrigues', 'Gerente', 7000);

  empresa.adicionarFuncionario(funcionario1);
  empresa.adicionarFuncionario(funcionario2);
  empresa.adicionarFuncionario(funcionario3);

  // Consultar um funcionário específico
  const consulta = empresa.consultarFuncionario(102);
  if (consulta) {
    console.log(`Funcionário encontrado: ${consulta.nome}, Cargo: ${consulta.cargo}, Salário: ${consulta.salario}`);
  }

  // Atualizar o salário de um funcionário
  empresa.atualizarSalario(101, 5500);

  // Consultar o funcionário após a atualização de salário
  const consultaAtualizada = empresa.consultarFuncionario(101);
  if (consultaAtualizada) {
    console.log(`Salário atualizado de ${consultaAtualizada.nome}: ${consultaAtualizada.salario}`);
  }

  // Testar erro ao tentar consultar um funcionário inexistente
  empresa.consultarFuncionario(104);
}

testarEmpresa();
