export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6265aa367fb7376dc890ad42',
                  title: 'Sanity Studio',
                  name: 'sanity-test-pages-studio',
                  apiId: 'cfe5dad5-24b9-426f-9897-913b07eb0d81'
                },
                {
                  buildHookId: '6265aa36dfdc585e193e92b7',
                  title: 'Landing pages Website',
                  name: 'sanity-test-pages',
                  apiId: '2d1bdb03-61cc-4fd7-be2c-206a154e75dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/karolex72/sanity-test-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-test-pages.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
