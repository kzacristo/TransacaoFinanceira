export interface Transacao {
    id: number;
    tipo: 'Entrada' | 'Saida';
    descricao: string;
    valor: number;
    data: Date;
    created_at: Date;
    updated_at: Date;
  }
  