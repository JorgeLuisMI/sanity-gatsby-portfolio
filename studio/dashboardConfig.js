export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5db09fa0f5747f018c782e2a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ex135e2b',
                  apiId: '3738a9f5-a4c4-4dad-ab22-dab78d95dd9a'
                },
                {
                  buildHookId: '5db09fa0cbc9d20185fe458c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-4wvefk5b',
                  apiId: '4eb3fd36-b369-4e40-84b7-2091b27c42e5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JorgeLuisMIPro/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-4wvefk5b.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
