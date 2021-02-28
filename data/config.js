export default {
  development: true,
  generate_command_json: true,

  creators: ['GeopJr#4066', 'Yimura#6969'],

  colors: {
    custom: {
      yellow: '#FFFF00',
      blue: '#74FFFA',
      purple: '#BA56FF'
    },
    success: '#00FF00',
    error: '#FF0000',
    warn: '#FFA500'
  },

  client_options: {
    disableMentions: 'everyone',

    messageCacheMaxSize: 100,
    messageCacheLifetime: 60,
    messageSweepInterval: 60,

    presence: {
      activity: {
        type: 'CUSTOM',
        name: 'Preparing the bubbles...'
      }
    },

    retryLimit: 1,

    ws: {
      intents: 513
    }
  },

  allow_mention_prefix: true,
  default_prefix: {
    prod: '==',
    dev: 's='
  },

  permission_bit: 388190,

  presence_settings: {
    switch_interval: 25e3,
    presences: [
      {
        activity: {
          type: 'LISTENING',
          name: '==help & ==info'
        }
      },
      {
        activity: {
          type: 'WATCHING',
          name: 'us on https://soft-wet.damon.sh'
        }
      },
      {
        activity: {
          type: 'WATCHING',
          name: 'version {version}'
        }
      },
      {
        activity: {
          type: 'WATCHING',
          name: 'over {serverCount} guilds'
        }
      },
      {
        activity: {
          type: 'WATCHING',
          name: 'vote for us on Top.gg'
        }
      },
      {
        activity: {
          type: 'WATCHING',
          name: 'join us on discord.gg/SWEsj6q'
        }
      }
    ]
  }
}
