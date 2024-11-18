import { Funcionario } from './Funcionario';

/**
 * Classe que gerencia os funcionários de uma empresa.
 */
export class Empresa {
  // Lista privada que armazena os funcionários da empresa.
  private funcionarios: Funcionario[] = [];

  /**
   * Adiciona um novo funcionário à empresa.
   * @param funcionario - Instância da classe Funcionario a ser adicionada.
   */
  adicionarFuncionario(funcionario: Funcionario): void {
    this.funcionarios.push(funcionario);
    console.log(`Funcionário ${funcionario.nome} adicionado com sucesso.`);
  }

  /**
   * Atualiza o salário de um funcionário existente.
   * @param matricula - A matrícula do funcionário cujo salário será atualizado.
   * @param salario - O novo salário do funcionário.
   */
  atualizarSalario(matricula: number, salario: number): void {
    const funcionario = this.funcionarios.find(f => f.matricula === matricula);
    if (!funcionario) {
      console.error(`Funcionário com matrícula ${matricula} não encontrado.`);
      return;
    }
    funcionario.salario = salario;
    console.log(`Salário de ${funcionario.nome} atualizado para ${salario}.`);
  }

  /**
   * Consulta as informações de um funcionário específico.
   * @param matricula - A matrícula do funcionário a ser consultado.
   * @returns Retorna a instância do Funcionario ou undefined se não encontrado.
   */
  consultarFuncionario(matricula: number): Funcionario | undefined {
    const funcionario = this.funcionarios.find(f => f.matricula === matricula);
    if (!funcionario) {
      console.error(`Funcionário com matrícula ${matricula} não encontrado.`);
      return undefined;
    }
    return funcionario;
  }
}
