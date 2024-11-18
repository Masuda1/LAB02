/**
 * Classe que representa um funcionário da empresa.
 */
export class Funcionario {
  matricula: number; // Identificador único do funcionário.
  nome: string; // Nome do funcionário.
  cargo: string; // Cargo do funcionário.
  salario: number; // Salário do funcionário.

  /**
   * Construtor da classe Funcionario.
   * @param matricula - A matrícula única do funcionário.
   * @param nome - O nome do funcionário.
   * @param cargo - O cargo ocupado pelo funcionário.
   * @param salario - O salário do funcionário.
   */
  constructor(matricula: number, nome: string, cargo: string, salario: number) {
    this.matricula = matricula;
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }
}
