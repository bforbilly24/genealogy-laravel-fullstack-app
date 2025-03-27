# STRUCTURE BANI MUFADHILLAH WEBSITE

## Client Side Structure Overview
```
└── 📁resources
    └── 📁css
        └── app.css
    └── 📁js
        └── 📁actions
            └── get-gallery.tsx
        └── 📁api
            └── api-url.tsx
        └── app.tsx
        └── 📁components
            └── 📁footer
                └── footer.tsx
            └── 📁global
                └── animation-container.tsx
                └── max-width-wrapper.tsx
                └── section.tsx
            └── 📁loader
                └── loader.tsx
            └── 📁miscellaneous
                └── console-logger.tsx
                └── scroll-to-anchor.tsx
            └── 📁navigation
                └── mobile-nav.tsx
                └── navbar.tsx
            └── 📁providers
                └── scroll-progress-provider.tsx
                └── theme-provider.tsx
            └── 📁svgs
                └── whatsapp-icon.tsx
            └── 📁ui
                └── 📁aceternity
                    └── focus-cards.tsx
                    └── text-hover-effect.tsx
                    └── timeline.tsx
                └── 📁magicui
                    └── interactive-hover-button.tsx
                    └── marquee.tsx
                └── 📁shadcn
                    └── badge.tsx
                    └── button.tsx
                    └── card.tsx
                    └── carousel.tsx
                    └── dialog.tsx
                    └── dropdown-menu.tsx
                    └── navigation-menu.tsx
                    └── pagination.tsx
                    └── scroll-area.tsx
                    └── select.tsx
                    └── separator.tsx
                    └── skeleton.tsx
                    └── sonner.tsx
                    └── toggle-group.tsx
                    └── toggle.tsx
                    └── tooltip.tsx
        └── 📁constants
            └── footer-link.ts
            └── history.tsx
            └── nav-links.ts
            └── news.ts
            └── quotes.ts
        └── 📁features
            └── 📁family-tree
                └── 📁components
                    └── editor.tsx
                    └── family-tree.tsx
                    └── menu.tsx
                └── 📁data
                    └── family.d.ts
                └── genealogy-section.tsx
            └── 📁gallery
                └── gallery-section.tsx
            └── 📁history
                └── 📁data
                    └── history.d.ts
                └── history-section.tsx
            └── 📁home
                └── about-us-section.tsx
                └── 📁components
                    └── quote-card.tsx
                └── hero-section.tsx
                └── history-section.tsx
                └── news-section.tsx
                └── quotes-section.tsx
                └── vision-mission-section.tsx
                └── visit-section.tsx
            └── 📁news-service
                └── 📁components
                    └── news-card.tsx
                └── 📁data
                    └── news.d.ts
                └── news-section.tsx
        └── 📁hooks
            └── toggle-theme.tsx
        └── 📁layouts
            └── main-layout.tsx
        └── 📁lib
            └── cn.ts
        └── 📁pages
            └── Gallery.tsx
            └── Genealogy.tsx
            └── History.tsx
            └── Home.tsx
            └── News.tsx
            └── NewsDetail.tsx
        └── 📁types
            └── api.d.ts
            └── global.d.ts
            └── index.d.ts
            └── vite-env.d.ts
        └── 📁utils
            └── flatten-map-node.ts
            └── format-date.ts
            └── generate-label.ts
            └── generate-slug.ts
    └── 📁views
        └── app.blade.php
```

## Server Side Structure Overview

```
└── 📁app
    └── 📁Filament
        └── 📁Resources
            └── 📁BlogResource
            └── BlogResource.php
                └── 📁Pages
                    └── CreateBlog.php
                    └── EditBlog.php
                    └── ListBlogs.php
                    └── ViewBlog.php
            └── 📁FamilyMemberResource
            └── FamilyMemberResource.php
                └── 📁Pages
                    └── CreateFamilyMember.php
                    └── EditFamilyMember.php
                    └── ListFamilyMembers.php
                    └── ViewFamilyMemberResource.php
            └── 📁ImageResource
            └── ImageResource.php
                └── 📁Pages
                    └── CreateImage.php
                    └── EditImage.php
                    └── ListImages.php
                    └── ViewImage.php
            └── 📁ProgramResource
            └── ProgramResource.php
                └── 📁Pages
                    └── CreateProgram.php
                    └── EditProgram.php
                    └── ListPrograms.php
                    └── ViewProgram.php
            └── 📁UserResource
            └── UserResource.php
                └── 📁Pages
                    └── CreateUser.php
                    └── EditUser.php
                    └── ListUsers.php
                    └── ViewUser.php
    └── 📁Helpers
        └── 📁Class
            └── BaseResource.php
            └── BaseResourceCreate.php
            └── BaseResourceEdit.php
            └── BaseResourceList.php
            └── BaseResourceView.php
        └── DataHelper.php
    └── 📁Http
        └── 📁Controllers
            └── Controller.php
            └── ImageController.php
        └── 📁Middleware
            └── HandleAppearance.php
            └── HandleInertiaRequests.php
        └── 📁Requests
            └── 📁Auth
                └── LoginRequest.php
            └── 📁Settings
                └── ProfileUpdateRequest.php
    └── 📁Models
        └── Blog.php
        └── FamilyMember.php
        └── Image.php
        └── Program.php
        └── User.php
    └── 📁Providers
        └── AppServiceProvider.php
        └── 📁Filament
            └── AdminPanelProvider.php
└── 📁database
    └── 📁factories
        └── UserFactory.php
    └── 📁migrations
        └── 0001_01_01_000000_create_users_table.php
        └── 0001_01_01_000001_create_cache_table.php
        └── 0001_01_01_000002_create_jobs_table.php
        └── 2025_03_18_145515_create_blogs_table.php
        └── 2025_03_18_150108_create_programs_table.php
        └── 2025_03_19_134724_create_family_members.php
        └── 2025_03_26_155955_create_images_table.php
    └── 📁seeders
        └── DatabaseSeeder.php
        └── UserSeeder.php
    └── .gitignore
└── 📁routes
    └── api.php
    └── console.php
    └── web.php
```


# INSTALLATION

## Client Side

```bash
npm install
```

## Server Side

```bash
composer install
```

```bash
php artisan key:generate
```

```bash
php artisan migrate:fresh --seed
```

```bash
php artisan storage:link
```

# RUNNING THE APP

```bash
npm run dev
```

```bash
php artisan serve
```

congratulations! now you can visit [http://127.0.0.1:8000](http://127.0.0.1:8000).