export default {
  widgets: [
    {
      name: 'gatsby',
      options: {
        sites: [
          {
            siteUrl: 'https://preview-sanitygatsbyblogproductio24070.gtsb.io/'
          }
        ]
      }
    },
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
                  buildHookId: '5f5d8af55583446546e9cc03',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pc2ghdn5',
                  apiId: 'bd0d246d-290e-4580-9c4d-0e9c5e720234'
                },
                {
                  buildHookId: '5f5d8af5b8c30d864535e0fc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mhqykngm',
                  apiId: 'e2fb42ea-3342-4818-8dab-139cdbb2ec8e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tmshkr/sanity-gatsby-blog',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-blog-web-mhqykngm.netlify.app',
            category: 'apps'
          }
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
