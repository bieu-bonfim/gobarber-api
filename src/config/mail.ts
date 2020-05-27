interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'developer@pebcomunicacao.com.br',
      name: 'P&B Dev Team',
    },
  },
} as IMailConfig;
