export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '606fbc849b435400c2b92a67',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8mz5pj5f',
                  apiId: 'e08a843c-7196-4963-802e-c3e315a4545e'
                },
                {
                  buildHookId: '606fbc83d7ec53009892b954',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-v3wj9m79',
                  apiId: '8bf78485-bd01-4a98-88be-f0ac0be4f671'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lwmouneyrac/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-v3wj9m79.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
