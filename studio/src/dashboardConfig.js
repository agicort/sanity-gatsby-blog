export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e7a2853287d41f43532e751',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ybe9knu5',
                  apiId: '5286cc28-169b-462d-b8f2-1c0e09a14d2c'
                },
                {
                  buildHookId: '5e7a2853890866de2b89044c',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-26zqaf2j',
                  apiId: 'b2fbb069-6971-4f61-b6ce-33114fbf81ba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/agicort/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-26zqaf2j.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
