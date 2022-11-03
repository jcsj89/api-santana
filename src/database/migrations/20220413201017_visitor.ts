import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('visitors', (table) => {
    table.uuid('id').primary().unique();
    table.string('det_nome');
    table.string('det_matricula');
    table.string('det_digito');
    table.string('matricula_digito');
    table.string('inc_procedencia');
    table.string('inc_raio');
    table.string('inc_cela');
    table.string('localizacao');
    table.string('vis_id');
    table.string('vis_nome');
    table.string('vis_parlatorio');
    table.string('vis_rg');
    table.string('vis_cpf');
    table.string('dvi_parentesco');
    table.string('vis_datanascimento');
    table.string('vis_sexo');
    table.string('vis_vencimento');
    table.string('vis_endereco_venc');
    table.string('vis_endereco');
    table.string('vis_cidade_id');
    table.string('endereco_cidade');
    table.string('endereco_uf');
    table.string('vis_bloqueado');
    table.string('vis_datacadastro');
    table.string('vis_dataalteracao');
    table.string('dvi_status');
    table.string('vis_obs');
    table.string('vis_obs_disponivel');
    table.string('movimentacao_data');
    table.string('movimentacao_motivo');
    table.string('idade');

    // Standards
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('visitors');
}
