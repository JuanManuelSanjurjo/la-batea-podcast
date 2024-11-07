---
title: Prueba desde CMS decap
description: "prueba "
pubDate: 2024-11-08T20:06:00.000Z
heroImage: /images/fotochica.jpg
tags:
  - prueba
  - foto
  - markdown
---
## contenido del config.yml

```yml
backend:
  name: git-gateway
  branch: master # Branch to update (optional; defaults to master)

media_folder: "src/assets/images" # Location where files will be stored in the repo
public_folder: "/images" # The src attribute for uploaded media

collections:
  - name: "blog" # Used in routes, e.g., /admin/collections/blog
    label: "Blog" # Used in the UI
    folder: "src/content/blog" # The path to the folder where the documents are stored
    create: true # Allow users to create new documents in this collection
    fields: # The fields for each document, usually in frontmatter
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Description", name: "description", widget: "string" }
      - { label: "Publish Date", name: "pubDate", widget: "datetime" }
      - { label: "Featured Image", name: "heroImage", widget: "image" }
      - { label: "Tags", name: "tags", widget: "list" }
      - { label: "Body", name: "body", widget: "markdown" }

identity:
  # Enable the identity widget on the admin dashboard
  enabled: true
  # Set the identity cookie name
  cookie_name: netlify-identity
  logouts_redirect: "/"

# Customizing the appearance
theme:
  color: "#00593d" # Primary color
  accent_color: "#01874d" # Accent color
  navbar:
    background_color: "#00593d" # Dark color for the navbar
    text_color: "#ffffff" # White text for the navbar
  sidebar:
    background_color: "#00593d" # White background for the sidebar
    text_color: "#ffffff" # Dark text fo
```
