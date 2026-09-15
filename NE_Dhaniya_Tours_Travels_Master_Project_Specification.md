# NE DHANIYA TOURS & TRAVELS

## Master Project Specification & AI Development Prompt

**Document Type:** Full Website + Admin CMS + SEO + Firebase Technical
Specification\
**Primary Development Tool:** Antigravity AI\
**Recommended Stack:** Next.js + TypeScript + Firebase\
**Primary Conversion Channel:** WhatsApp

------------------------------------------------------------------------

# 1. PROJECT OBJECTIVE

Build a premium, modern, mobile-first, SEO-first travel website and
content management system for **NE Dhaniya Tours & Travels**, a
Northeast India travel agency providing:

-   Tour Packages
-   Personal / Private Tours
-   Sharing Tours
-   Car Rental / Vehicle Services
-   Hotel Booking
-   Group Transportation
-   Airport / Railway Transfers
-   Customized Northeast India Trips
-   Bhutan Tours

The website must be designed for two equally important objectives:

1.  **Organic Google traffic**
2.  **WhatsApp enquiries and bookings**

The website must NOT look like a generic travel-agency template. It
should feel like a professional Northeast India travel brand with strong
photography, excellent UX, destination-focused content and clear
conversion paths.

The website should be scalable from a small initial website into a large
travel content platform containing hundreds of useful destination,
tourist-place, package and blog pages.

------------------------------------------------------------------------

# 2. CORE BUSINESS INFORMATION

## Business Name

**NE Dhaniya Tours & Travels**

## Positioning

**Your Trusted Travel Partner for Northeast India & Bhutan**

## Main Services

### Personal / Private Travel

Private vehicle and customized travel for:

-   Families
-   Couples
-   Honeymoon travellers
-   Friends
-   Corporate groups
-   Customized itineraries

### Sharing Travel

Budget-friendly shared travel for:

-   Solo travellers
-   Small groups
-   Students
-   Budget travellers
-   Backpackers

### Vehicle Services

Available vehicles:

-   Urbania
-   Traveler 13 Seater
-   Traveler 17 Seater
-   Traveler 26 Seater
-   Innova Crysta
-   Deluxe Bus 24 Seater
-   Luxury Bus 22 Seater
-   Sedan

Do not invent additional vehicle specifications.

### Other Services

-   Tour planning
-   Hotel booking
-   Sightseeing
-   Airport transfers
-   Railway transfers
-   Group transportation
-   Customized itineraries

## Primary Booking Method

**WhatsApp**

Create a floating WhatsApp button and prominent WhatsApp CTAs throughout
the website.

Do not hardcode the WhatsApp number in multiple files. Store it
centrally in website settings/environment configuration.

------------------------------------------------------------------------

# 3. SERVICE AREAS

NE Dhaniya Tours & Travels provides tourist services in:

1.  Assam
2.  Meghalaya
3.  Arunachal Pradesh
4.  Nagaland
5.  Sikkim
6.  Mizoram
7.  Tripura
8.  Bhutan

Each destination must have its own SEO-friendly landing page.

When users click a destination, they should see all important tourist
places under that destination.

Do NOT use only a dropdown or modal for destinations.

------------------------------------------------------------------------

# 4. RECOMMENDED TECHNOLOGY STACK

## Public Website

Use:

-   Next.js
-   TypeScript
-   App Router
-   React
-   Tailwind CSS
-   Server Components by default

## Backend / CMS

Use Firebase:

-   Firebase Authentication
-   Cloud Firestore
-   Firebase Storage
-   Firebase App Check where appropriate

## Deployment

Architecture should work with:

-   Vercel
-   Firebase App Hosting

## Why Next.js Instead of React + Vite?

React is the UI library, but this project is an SEO-heavy public
website.

The website needs:

-   Server-rendered content
-   Static generation
-   Incremental regeneration/revalidation
-   Dynamic metadata
-   SEO-friendly routing
-   Dynamic sitemap
-   Fast initial HTML
-   Excellent Core Web Vitals

Therefore use **Next.js with React**, rather than building the public
website as a client-only React/Vite SPA.

The Admin Panel can use client-side React functionality where
appropriate.

------------------------------------------------------------------------

# 5. HIGH-LEVEL ARCHITECTURE

Use this architecture:

``` text
USER / GOOGLE
      |
      v
NEXT.JS PUBLIC WEBSITE
      |
      +---- SEO Pages
      +---- Destination Pages
      +---- Tourist Place Pages
      +---- Tour Package Pages
      +---- Car Rental Pages
      +---- Hotel Booking Pages
      +---- Blog Pages
      |
      v
FIREBASE / FIRESTORE
      |
      +---- Destinations
      +---- Tourist Places
      +---- Tour Packages
      +---- Vehicles
      +---- Blogs
      +---- Categories
      +---- Enquiries
      +---- Site Settings
      +---- Redirects
      |
      +---- FIREBASE STORAGE
      |       Images / Media
      |
      +---- FIREBASE AUTH
              Admin Login
```

Public content should not depend on browser-only `useEffect()` fetching
for important SEO content.

Use server-side fetching, caching and revalidation where appropriate.

------------------------------------------------------------------------

# 6. WEBSITE INFORMATION ARCHITECTURE

## Main Public Routes

``` text
/
 /about-us/
 /contact/
 /destinations/
 /destinations/assam/
 /destinations/assam/guwahati/
 /destinations/assam/kaziranga-national-park/
 /destinations/meghalaya/
 /destinations/meghalaya/shillong/
 /destinations/arunachal-pradesh/
 /destinations/arunachal-pradesh/tawang/
 /destinations/nagaland/
 /destinations/sikkim/
 /destinations/mizoram/
 /destinations/tripura/
 /destinations/bhutan/

 /tour-packages/
 /tour-packages/[slug]/

 /car-rental/
 /car-rental/[destination]/

 /hotel-booking/

 /blog/
 /blog/[slug]/

 /privacy-policy/
 /terms-and-conditions/
```

Admin routes:

``` text
/admin/login
/admin/dashboard
/admin/destinations
/admin/destinations/new
/admin/destinations/[id]/edit
/admin/places
/admin/places/new
/admin/packages
/admin/packages/new
/admin/packages/[id]/edit
/admin/blog
/admin/blog/new
/admin/blog/[id]/edit
/admin/categories
/admin/media
/admin/enquiries
/admin/settings
/admin/users
```

Admin routes must never appear in public navigation or sitemap.

------------------------------------------------------------------------

# 7. DESTINATION STRUCTURE

## Assam

Tourist places:

-   Guwahati
-   Kamakhya Temple
-   Kaziranga National Park
-   Manas National Park
-   Majuli
-   Sivasagar
-   Jorhat
-   Dibrugarh
-   Tinsukia
-   Digboi
-   Haflong
-   Tezpur
-   Pobitora Wildlife Sanctuary
-   Orang National Park
-   Hoollongapar Gibbon Wildlife Sanctuary
-   Chandubi Lake
-   Bogamati
-   Kakochang Waterfalls

## Meghalaya

-   Shillong
-   Cherrapunji / Sohra
-   Dawki
-   Mawlynnong
-   Laitlum Canyon
-   Nongriat
-   Double Decker Living Root Bridge
-   Mawsynram
-   Jowai
-   Krang Suri Falls
-   Shnongpdeng
-   Umiam Lake
-   Elephant Falls
-   Seven Sisters Falls
-   Nohkalikai Falls
-   Wei Sawdong Falls
-   Mawphlang
-   Mawlyngbna

## Arunachal Pradesh

-   Tawang
-   Bomdila
-   Dirang
-   Sela Pass
-   Bumla Pass
-   Madhuri Lake
-   Ziro
-   Itanagar
-   Bomdila Monastery
-   Sangti Valley
-   Mandala Top
-   Jaswant Garh
-   Nuranang Falls
-   Bhalukpong
-   Dirang Valley
-   Mechuka
-   Anini
-   Pasighat
-   Roing
-   Tezu

## Nagaland

-   Kohima
-   Dzukou Valley
-   Kisama Heritage Village
-   Hornbill Festival
-   Khonoma
-   Mokokchung
-   Mon
-   Wokha
-   Tuophema
-   Japfu Peak
-   Pulie Badze
-   Triple Falls
-   Intangki National Park

## Sikkim

-   Gangtok
-   North Sikkim
-   Lachung
-   Yumthang Valley
-   Zero Point
-   Lachen
-   Gurudongmar Lake
-   Pelling
-   Namchi
-   Ravangla
-   Tsomgo Lake
-   Nathula Pass
-   Baba Mandir
-   Zuluk
-   Temi Tea Garden
-   Rumtek Monastery

## Mizoram

-   Aizawl
-   Reiek
-   Hmuifang
-   Vantawng Falls
-   Tamdil Lake
-   Phawngpui National Park
-   Champhai
-   Thenzawl
-   Serchhip
-   Lunglei
-   Durtlang Hills

## Tripura

-   Agartala
-   Ujjayanta Palace
-   Neermahal Palace
-   Unakoti
-   Jampui Hills
-   Sepahijala Wildlife Sanctuary
-   Tripura Sundari Temple
-   Rudrasagar Lake
-   Pilak
-   Chabimura

## Bhutan

-   Thimphu
-   Paro
-   Punakha
-   Phobjikha Valley
-   Dochula Pass
-   Tiger's Nest Monastery
-   Chele La Pass
-   Wangdue Phodrang
-   Bumthang
-   Haa Valley
-   Chukha
-   Gangtey

Where information is uncertain, verify it before publishing. Do not
invent attractions, routes, fees, permits or business claims.

------------------------------------------------------------------------

# 8. HOMEPAGE

Create a visually powerful homepage.

## Hero

Use a premium Northeast India travel image/video.

Headline:

**Explore Northeast India & Bhutan Like Never Before**

Subheadline:

**Tour Packages • Private & Sharing Tours • Car Rental • Hotel Booking**

Primary CTA:

**Plan My Trip on WhatsApp**

Secondary CTA:

**Explore Destinations**

Add a trip enquiry widget:

-   Destination
-   Travel Type
-   Number of Travellers
-   Travel Date

CTA:

**Get Free Quote on WhatsApp**

------------------------------------------------------------------------

# 9. HOMEPAGE SECTIONS

Order:

1.  Hero
2.  Trip Search / Enquiry
3.  Trust / Value Proposition
4.  Explore Destinations
5.  Popular Tour Packages
6.  Personal vs Sharing
7.  Vehicle Fleet
8.  Hotel Booking
9.  Why Choose NE Dhaniya
10. Travel Guide / Blog
11. FAQ
12. Final WhatsApp CTA
13. Footer

------------------------------------------------------------------------

# 10. TRUST SECTION

Create four attractive cards:

### Northeast Expertise

Travel assistance focused on Northeast India and Bhutan.

### Personal & Sharing Tours

Choose private comfort or sharing travel.

### Complete Travel Solution

Tours, vehicles and hotel booking in one place.

### Easy WhatsApp Booking

Simple enquiry and booking through WhatsApp.

Do not add fake statistics or unsupported claims.

------------------------------------------------------------------------

# 11. DESTINATION CARDS

Create cards for:

-   Assam
-   Meghalaya
-   Arunachal Pradesh
-   Nagaland
-   Sikkim
-   Mizoram
-   Tripura
-   Bhutan

Each card:

-   High-quality image
-   Destination name
-   Short description
-   Popular places
-   Explore button

Clicking opens the destination page.

------------------------------------------------------------------------

# 12. POPULAR TOUR PACKAGES

Create attractive package cards.

Initial examples:

### Meghalaya Escape

Shillong • Cherrapunji • Dawki • Mawlynnong

### Tawang Adventure

Guwahati • Bomdila • Dirang • Tawang • Bumla

### Kaziranga Wildlife Tour

Guwahati • Kaziranga • Jeep Safari

### Sikkim Explorer

Gangtok • Tsomgo Lake • Nathula • North Sikkim

### Assam Discovery

Guwahati • Kaziranga • Majuli • Sivasagar

### Bhutan Experience

Phuentsholing • Thimphu • Punakha • Paro

Do not publish fake prices.

Use:

**Get Custom Quote**

------------------------------------------------------------------------

# 13. PERSONAL VS SHARING SECTION

## PERSONAL / PRIVATE

Headline:

**Your Journey. Your Vehicle. Your Freedom.**

Show:

-   Private vehicle
-   Flexible itinerary
-   More privacy
-   Flexible stops
-   Family friendly
-   Customized trip

CTA:

**Plan Personal Trip**

## SHARING

Headline:

**Explore More. Spend Less.**

Show:

-   Shared vehicle
-   Budget friendly
-   Fixed itinerary
-   Good for solo travellers
-   Good for small groups

CTA:

**Explore Sharing Tours**

This distinction must be visible throughout the website.

------------------------------------------------------------------------

# 14. VEHICLE FLEET

Create premium vehicle cards:

### Urbania

Premium group travel.

### Traveler -- 13 Seater

### Traveler -- 17 Seater

### Traveler -- 26 Seater

### Innova Crysta

Comfortable family and premium travel.

### Deluxe Bus -- 24 Seater

### Luxury Bus -- 22 Seater

### Sedan

Couples, small families and individual travel.

Each card:

-   Image
-   Seating capacity
-   Short description
-   Ideal for
-   WhatsApp enquiry

Do not invent vehicle specifications.

------------------------------------------------------------------------

# 15. CAR RENTAL PAGE

URL:

`/car-rental/`

SEO focus:

-   Northeast India Car Rental
-   Assam Car Rental
-   Meghalaya Car Rental
-   Arunachal Pradesh Car Rental
-   Sikkim Car Rental
-   Northeast India Taxi Service

Include:

-   Private car rental
-   Multi-day trips
-   Sightseeing
-   Airport transfer
-   Railway transfer
-   Group transport
-   Destination-based vehicle options

------------------------------------------------------------------------

# 16. HOTEL BOOKING PAGE

URL:

`/hotel-booking/`

Explain hotel booking assistance for:

-   Budget stays
-   Premium hotels
-   Family stays
-   Couples
-   Groups
-   Destination-based accommodation

CTA:

**Find My Hotel on WhatsApp**

Do not claim partnerships unless verified.

------------------------------------------------------------------------

# 17. DESTINATION PAGE TEMPLATE

Example:

`/destinations/meghalaya/`

Sections:

1.  Hero
2.  H1
3.  Destination introduction
4.  Popular tourist places
5.  Popular tour packages
6.  Vehicle services
7.  Hotel booking
8.  Best time to visit
9.  How to reach
10. Travel tips
11. FAQs
12. Related destinations
13. WhatsApp CTA

Every destination page needs unique useful content.

------------------------------------------------------------------------

# 18. TOURIST PLACE PAGE TEMPLATE

Example:

`/destinations/meghalaya/shillong/`

Sections:

-   Hero
-   About Shillong
-   Why Visit
-   Top Places Nearby
-   Things to Do
-   Best Time
-   How to Reach
-   Shillong Taxi / Car Service
-   Shillong Tour Packages
-   Hotels / Stay Information
-   Personal vs Sharing
-   FAQs
-   WhatsApp CTA

Use similar architecture for major tourist places.

Do not create hundreds of thin pages just for SEO.

------------------------------------------------------------------------

# 19. TOUR PACKAGE PAGE

Every package page should contain:

-   Hero image
-   Destination
-   Duration
-   Tour type
-   Personal / Sharing availability
-   Highlights
-   Day-by-day itinerary
-   Inclusions
-   Exclusions
-   Vehicle options
-   Hotel options
-   FAQs
-   Related destinations
-   WhatsApp CTA

CTA:

**Get Customized Quote**

------------------------------------------------------------------------

# 20. BLOG / TRAVEL GUIDE

Create a major SEO content hub:

`/blog/`

Categories:

-   Northeast India Travel
-   Assam
-   Meghalaya
-   Arunachal Pradesh
-   Nagaland
-   Sikkim
-   Mizoram
-   Tripura
-   Bhutan
-   Travel Tips
-   Tour Planning
-   Car Rental
-   Hotel Booking

The blog must support commercial SEO pages through internal links.

Example:

**Best Time to Visit Meghalaya** → Meghalaya Destination Page →
Meghalaya Tour Packages → Shillong → Cherrapunji → Dawki → Meghalaya Car
Rental

------------------------------------------------------------------------

# 21. INITIAL BLOG TOPICS

Create the CMS ready for topics such as:

1.  Best Places to Visit in Northeast India
2.  Best Time to Visit Meghalaya
3.  Meghalaya 5 Day Itinerary
4.  Meghalaya Tour Cost
5.  Shillong Travel Guide
6.  Shillong to Cherrapunji Travel Guide
7.  Shillong to Dawki Travel Guide
8.  Best Places to Visit in Arunachal Pradesh
9.  Complete Tawang Travel Guide
10. Guwahati to Tawang Road Trip Guide
11. Best Time to Visit Tawang
12. Best Places to Visit in Assam
13. Kaziranga Travel Guide
14. Majuli Travel Guide
15. Best Places to Visit in Sikkim
16. Gangtok Travel Guide
17. North Sikkim Travel Guide
18. Yumthang Valley Travel Guide
19. Best Places to Visit in Nagaland
20. Dzukou Valley Travel Guide
21. Mizoram Travel Guide
22. Tripura Travel Guide
23. Bhutan Travel Guide
24. Bhutan Tour from Assam
25. Best Places to Visit in Bhutan

Content must be original, helpful and factually checked.

------------------------------------------------------------------------

# 22. FIREBASE ADMIN PANEL

Create a dedicated protected admin dashboard at:

`/admin`

The admin must allow the business to manage the entire content system
without changing code.

Sidebar:

-   Dashboard
-   Destinations
-   Tourist Places
-   Tour Packages
-   Vehicles
-   Hotel Information
-   Blog Posts
-   Blog Categories
-   Media Library
-   Enquiries
-   SEO Settings
-   Website Settings
-   Admin Users
-   Logout

------------------------------------------------------------------------

# 23. ADMIN DASHBOARD

Show:

-   Total Destinations
-   Total Tourist Places
-   Total Packages
-   Published Blogs
-   Draft Blogs
-   Scheduled Blogs
-   New Enquiries
-   Recent enquiries
-   Recently updated content

Quick actions:

-   Add Destination
-   Add Tourist Place
-   Add Package
-   Write Blog
-   Upload Media

------------------------------------------------------------------------

# 24. FIREBASE AUTHENTICATION

Use Firebase Authentication.

Preferred:

-   Email + Password
-   Optional Google Sign-In

Protect `/admin`.

Unauthenticated users must be redirected to `/admin/login`.

Do not rely on route hiding alone.

Use Firebase Authentication + Firestore Security Rules + Storage
Security Rules.

Never expose Firebase Admin SDK credentials in browser code.

------------------------------------------------------------------------

# 25. ADMIN ROLES

Prepare role-based authorization.

### Super Admin

Full access.

### Content Manager

Can manage:

-   Destinations
-   Tourist Places
-   Packages
-   Blogs
-   Media

### Enquiry Manager

Can manage:

-   Enquiries
-   Status
-   Follow-ups

Do not allow unauthorized users to modify protected data.

------------------------------------------------------------------------

# 26. DESTINATION CMS MODEL

Suggested Firestore document:

``` text
destinations/{id}

name
slug
shortDescription
description
heroImage
gallery[]
bestTimeToVisit
howToReach
travelTips[]
popularPlaces[]
faqs[]
relatedPackages[]
seoTitle
seoDescription
canonicalUrl
ogImage
status
createdAt
updatedAt
```

Status:

-   draft
-   published
-   archived

------------------------------------------------------------------------

# 27. TOURIST PLACE CMS MODEL

``` text
touristPlaces/{id}

name
slug
destinationId
shortDescription
description
heroImage
gallery[]
topThingsToDo[]
bestTimeToVisit
howToReach
travelTips[]
faqs[]
relatedPackages[]
seoTitle
seoDescription
canonicalUrl
ogImage
status
createdAt
updatedAt
```

------------------------------------------------------------------------

# 28. TOUR PACKAGE CMS MODEL

``` text
tourPackages/{id}

name
slug
destinationId
duration
tourType
travelMode
shortDescription
description
heroImage
gallery[]
highlights[]
itinerary[]
inclusions[]
exclusions[]
vehicleOptions[]
hotelOptions[]
faqs[]
relatedDestinations[]
seoTitle
seoDescription
canonicalUrl
ogImage
featured
status
createdAt
updatedAt
```

Travel modes:

-   Personal
-   Sharing
-   Both

------------------------------------------------------------------------

# 29. VEHICLE CMS MODEL

``` text
vehicles/{id}

name
slug
seatingCapacity
description
image
gallery[]
idealFor[]
status
createdAt
updatedAt
```

------------------------------------------------------------------------

# 30. BLOG CMS MODEL

``` text
blogs/{id}

title
slug
excerpt
content
featuredImage
categoryId
tags[]
author
readingTime
publishedAt
updatedAt
status
seoTitle
seoDescription
canonicalUrl
ogImage
noIndex
faqs[]
relatedDestinations[]
relatedPackages[]
createdAt
updatedAt
```

Statuses:

-   draft
-   scheduled
-   published
-   archived

------------------------------------------------------------------------

# 31. BLOG EDITOR

Provide a professional rich text editor supporting:

-   H1-H6
-   Paragraph
-   Bold
-   Italic
-   Lists
-   Numbered lists
-   Links
-   Images
-   Captions
-   Blockquotes
-   Tables
-   FAQ blocks
-   Callout boxes
-   Video embeds where appropriate

Important:

Content must render as semantic HTML.

Do not make important article content dependent on JavaScript after page
load.

------------------------------------------------------------------------

# 32. BLOG WORKFLOW

Admin workflow:

``` text
Create Draft
      ↓
Edit
      ↓
Preview
      ↓
Publish / Schedule
      ↓
Revalidate Page
      ↓
Update Sitemap
```

Unpublishing should remove the page from normal public indexing and
handle the URL appropriately.

------------------------------------------------------------------------

# 33. MEDIA LIBRARY

Use Firebase Storage.

Admin features:

-   Upload
-   Preview
-   Search
-   Delete
-   Copy URL
-   Assign alt text
-   Assign caption
-   Organize by folder/category

Store metadata:

``` text
media/{id}

url
filename
altText
caption
folder
uploadedBy
createdAt
```

Use descriptive image filenames and alt text.

------------------------------------------------------------------------

# 34. ENQUIRY SYSTEM

Public enquiry form:

-   Name
-   Phone / WhatsApp
-   Destination
-   Travel Date
-   Number of Travellers
-   Travel Type
-   Vehicle Preference
-   Message

Save enquiries to Firestore.

Suggested model:

``` text
enquiries/{id}

name
phone
destination
travelDate
travellers
travelType
vehiclePreference
message
sourcePage
status
createdAt
```

Statuses:

-   New
-   Contacted
-   Follow-up
-   Converted
-   Closed

------------------------------------------------------------------------

# 35. WHATSAPP INTEGRATION

Central configuration:

``` text
WHATSAPP_NUMBER
```

Generate contextual pre-filled messages.

Package:

"Hello NE Dhaniya Tours & Travels, I am interested in the \[Package
Name\]. Please share the details."

Destination:

"Hello NE Dhaniya Tours & Travels, I am planning a trip to
\[Destination\]. Please help me plan my trip."

Vehicle:

"Hello, I want to enquire about \[Vehicle Name\] for my trip."

Hotel:

"Hello, I need hotel booking assistance for \[Destination\]."

All WhatsApp buttons should use the same central utility/helper.

------------------------------------------------------------------------

# 36. SEO ARCHITECTURE

Every indexable public page must have:

-   Unique title
-   Unique meta description
-   One H1
-   Logical H2/H3
-   Canonical URL
-   Open Graph
-   Twitter/X metadata
-   Breadcrumbs
-   Internal links
-   Image alt text
-   Appropriate structured data

Do not keyword-stuff.

Do not create fake SEO content.

------------------------------------------------------------------------

# 37. DYNAMIC SEO METADATA

Use Next.js Metadata API.

For every destination, package, tourist place and blog:

Generate metadata from Firestore.

Example:

``` text
Title:
Meghalaya Tour Packages, Taxi & Travel Services | NE Dhaniya

Description:
Explore Meghalaya with NE Dhaniya Tours & Travels. Discover Shillong, Cherrapunji, Dawki, Mawlynnong and more with personal and sharing travel options.
```

Allow admin to override metadata.

------------------------------------------------------------------------

# 38. STRUCTURED DATA

Implement appropriate JSON-LD:

-   Organization
-   LocalBusiness / TravelAgency where appropriate
-   BreadcrumbList
-   Article
-   TouristDestination where appropriate
-   TouristAttraction where appropriate
-   FAQPage only when visible FAQ content exists

Never add fake:

-   Reviews
-   Ratings
-   Awards
-   Certifications
-   Customer numbers

------------------------------------------------------------------------

# 39. SITEMAP

Create dynamic:

`/sitemap.xml`

Include:

-   Public static pages
-   Published destinations
-   Published tourist places
-   Published packages
-   Published blog posts

Exclude:

-   Admin
-   Drafts
-   Unpublished pages
-   Login pages
-   Private routes

------------------------------------------------------------------------

# 40. ROBOTS

Create:

`/robots.txt`

Allow public pages.

Disallow:

``` text
/admin/
```

and other private/system routes.

------------------------------------------------------------------------

# 41. INTERNAL LINKING

Create a strong topical cluster.

Example:

``` text
Northeast India
    ↓
Meghalaya
    ↓
Shillong
    ↓
Shillong Tour Package
    ↓
Meghalaya Tour Package
    ↓
Meghalaya Car Rental
```

Blog articles should naturally link to destination and commercial pages.

Destination pages should link to:

-   Tourist places
-   Packages
-   Car rental
-   Hotel booking
-   Relevant blogs

------------------------------------------------------------------------

# 42. SEO LANDING PAGES

Create useful commercial landing pages such as:

``` text
/assam-tour-packages/
/meghalaya-tour-packages/
/arunachal-pradesh-tour-packages/
/nagaland-tour-packages/
/sikkim-tour-packages/
/mizoram-tour-packages/
/tripura-tour-packages/
/bhutan-tour-packages/
```

Also where genuinely useful:

``` text
/meghalaya-car-rental/
/arunachal-pradesh-car-rental/
/assam-car-rental/
/sikkim-car-rental/
```

Do not create thin doorway pages.

Each landing page must contain unique useful content and a clear user
purpose.

------------------------------------------------------------------------

# 43. LOCAL SEO

Optimize naturally for searches such as:

-   Travel Agency in Assam
-   Northeast India Travel Agency
-   Northeast India Tour Operator
-   Northeast India Tour Packages
-   Assam Tour Operator
-   Northeast India Car Rental
-   Northeast India Taxi Service
-   Meghalaya Taxi Service
-   Tawang Taxi Service
-   Sikkim Car Rental

Only create location pages for places where the business genuinely
provides services.

Do not fabricate local offices.

------------------------------------------------------------------------

# 44. BLOG-TO-COMMERCE STRATEGY

The blog should generate informational traffic and guide users toward
bookings.

Example:

``` text
Google Search
    ↓
"Best Time to Visit Meghalaya"
    ↓
Blog Article
    ↓
Meghalaya Destination
    ↓
Meghalaya Tour Package
    ↓
WhatsApp
    ↓
Enquiry
```

Every relevant article should have contextual internal links and a
natural CTA.

------------------------------------------------------------------------

# 45. DESIGN SYSTEM

Visual direction:

-   Premium
-   Modern
-   Adventurous
-   Natural
-   Trustworthy
-   Photography-led
-   Clean
-   Spacious

Visual inspiration:

-   Northeast mountains
-   Forests
-   Waterfalls
-   Rivers
-   Valleys
-   Roads
-   Monasteries
-   Wildlife
-   Clouds
-   Local architecture

Avoid stereotypical ethnic decoration.

------------------------------------------------------------------------

# 46. COLOR DIRECTION

Suggested palette:

-   Deep forest green
-   Warm off-white
-   Charcoal
-   Earth tones
-   Natural blue
-   Subtle warm accent

Use the logo colors consistently once the final logo is approved.

------------------------------------------------------------------------

# 47. TYPOGRAPHY

Use a modern, highly readable sans-serif font.

Headings:

-   Strong
-   Premium
-   Bold

Body:

-   Highly readable
-   Comfortable line height
-   Good mobile sizing

------------------------------------------------------------------------

# 48. RESPONSIVE DESIGN

Optimize for:

-   Mobile
-   Tablet
-   Laptop
-   Desktop
-   Large desktop

Mobile is the highest priority.

Use:

-   Sticky WhatsApp CTA
-   Click-to-call
-   Large buttons
-   Simple forms
-   Fast-loading images
-   Easy navigation

------------------------------------------------------------------------

# 49. MOBILE BOTTOM NAVIGATION

On mobile consider:

**Home \| Destinations \| Packages \| WhatsApp**

On package pages:

**Get Quote on WhatsApp**

Do not let sticky buttons cover page content.

------------------------------------------------------------------------

# 50. HEADER

Desktop:

Logo \| Destinations \| Tour Packages \| Car Rental \| Hotel Booking \|
Travel Guide \| About \| Contact

CTA:

**WhatsApp Us**

Mobile:

-   Hamburger menu
-   Sticky WhatsApp action

------------------------------------------------------------------------

# 51. FOOTER

Include:

NE Dhaniya Tours & Travels

**Explore Northeast India & Bhutan with confidence.**

Links:

-   Home
-   About
-   Destinations
-   Tour Packages
-   Car Rental
-   Hotel Booking
-   Travel Guide
-   Contact
-   Privacy Policy
-   Terms & Conditions

Destination links:

-   Assam
-   Meghalaya
-   Arunachal Pradesh
-   Nagaland
-   Sikkim
-   Mizoram
-   Tripura
-   Bhutan

Only display actual business contact information.

------------------------------------------------------------------------

# 52. ABOUT PAGE

URL:

`/about-us/`

Explain:

-   Who NE Dhaniya Tours & Travels is
-   Northeast India focus
-   Services
-   Personal and sharing tours
-   Vehicle options
-   Hotel booking
-   Customized travel
-   Customer-focused service

Do not invent:

-   Awards
-   Certifications
-   Years in business
-   Customer numbers
-   Government approvals

------------------------------------------------------------------------

# 53. CONTACT PAGE

URL:

`/contact/`

Include actual available:

-   Phone
-   WhatsApp
-   Email
-   Address
-   Business hours
-   Google Maps
-   Enquiry form

Do not invent contact details.

------------------------------------------------------------------------

# 54. ANALYTICS

Prepare integration for:

-   Google Analytics 4
-   Google Search Console
-   Google Tag Manager

Track:

-   WhatsApp clicks
-   Phone clicks
-   Form submissions
-   Package enquiries
-   Destination clicks
-   Vehicle enquiries
-   Hotel enquiries

Suggested events:

``` text
whatsapp_click
phone_click
enquiry_submit
package_enquiry
destination_enquiry
vehicle_enquiry
hotel_enquiry
```

------------------------------------------------------------------------

# 55. PERFORMANCE

Target excellent Core Web Vitals.

Optimize:

-   Images
-   Fonts
-   JavaScript
-   Third-party scripts
-   Firebase queries
-   Firestore reads
-   Caching

Use:

-   WebP / AVIF where appropriate
-   Responsive images
-   Lazy loading
-   Proper image dimensions
-   Code splitting
-   Minimal client components

Do not use heavy video backgrounds on mobile if they negatively affect
performance.

------------------------------------------------------------------------

# 56. FIRESTORE PERFORMANCE

Avoid fetching entire collections.

Use:

-   Indexed queries
-   Filtering
-   Pagination
-   Server-side fetching
-   Caching
-   Revalidation

Do not perform unnecessary Firebase requests on every browser render.

------------------------------------------------------------------------

# 57. SECURITY

Implement:

-   Firebase Authentication
-   Firestore Security Rules
-   Firebase Storage Rules
-   Input validation
-   Input sanitization
-   Spam protection
-   Firebase App Check where appropriate
-   Environment variables
-   Secure server-side operations

Never expose service-account credentials.

------------------------------------------------------------------------

# 58. REDIRECT MANAGEMENT

Create a `redirects` collection.

When a published slug changes, allow the system/admin to preserve the
old URL through a redirect.

Example:

``` text
oldSlug: /blog/old-name/
newSlug: /blog/new-name/
status: 301
```

Warn the admin before changing a published slug.

------------------------------------------------------------------------

# 59. 404 PAGE

Create a professional 404 page with:

-   Friendly message
-   Search / destination exploration
-   Popular destinations
-   Tour package CTA
-   WhatsApp CTA

Return the correct 404 status.

------------------------------------------------------------------------

# 60. CONTENT QUALITY RULES

Every indexed page must provide genuine value.

Never use:

-   Keyword stuffing
-   Duplicate paragraphs
-   AI filler
-   Fake reviews
-   Fake prices
-   Fake awards
-   Fake partnerships
-   Fake statistics
-   Automatically generated thin pages

Use original, useful travel information.

------------------------------------------------------------------------

# 61. SEO CONTENT PRINCIPLE

The goal is NOT:

**Create as many pages as possible.**

The goal is:

**Create the best useful page for every meaningful search intent.**

Build topical authority around:

-   Northeast India travel
-   Assam
-   Meghalaya
-   Arunachal Pradesh
-   Nagaland
-   Sikkim
-   Mizoram
-   Tripura
-   Bhutan
-   Tour packages
-   Car rental
-   Hotel booking
-   Travel guides

------------------------------------------------------------------------

# 62. ADMIN SEO PREVIEW

In every content editor, provide:

### Google Search Preview

Show:

-   SEO title
-   URL
-   Meta description

Also show warnings for:

-   Missing SEO title
-   Missing description
-   Missing H1
-   Missing featured image
-   Very short content
-   Duplicate slug

Do not make arbitrary "SEO scores" the primary measure. Give useful
actionable warnings.

------------------------------------------------------------------------

# 63. ADMIN PREVIEW

Every content item should support:

**Save Draft → Preview → Publish**

Preview must use the real public page layout.

------------------------------------------------------------------------

# 64. PUBLISHING REVALIDATION

When admin publishes or updates:

-   Destination
-   Tourist Place
-   Tour Package
-   Blog

trigger revalidation for affected public pages.

Update:

-   Public page
-   Related pages where applicable
-   Homepage sections
-   Sitemap

Do not require a complete redeployment for ordinary content updates.

------------------------------------------------------------------------

# 65. DATA RELATIONSHIPS

Use IDs/references rather than duplicating large content.

Example:

``` text
Destination
   |
   +---- Tourist Places
   |
   +---- Tour Packages
   |
   +---- Related Blogs
```

A package can reference its destination.

A blog can reference multiple destinations and packages.

------------------------------------------------------------------------

# 66. INITIAL FIRESTORE COLLECTIONS

Create:

``` text
siteSettings
admins
destinations
touristPlaces
tourPackages
vehicles
blogs
blogCategories
media
enquiries
redirects
```

Keep the structure clean and scalable.

------------------------------------------------------------------------

# 67. ADMIN WEBSITE SETTINGS

Allow admin to edit:

### Business

-   Name
-   WhatsApp
-   Phone
-   Email
-   Address
-   Google Maps
-   Business hours
-   Social links

### SEO

-   Default title
-   Default description
-   Default OG image

### Website

-   Logo
-   Favicon
-   Footer text
-   CTA labels

Do not duplicate configuration across code.

------------------------------------------------------------------------

# 68. WHATSAPP CTA SYSTEM

Primary CTA:

**Plan Your Trip on WhatsApp**

Secondary:

**Get Custom Quote**

Other contextual CTAs:

-   Book Vehicle
-   Find My Hotel
-   Talk to Travel Expert
-   Explore Destinations

Keep CTA language consistent.

------------------------------------------------------------------------

# 69. ACCESSIBILITY

Implement:

-   Semantic HTML
-   Keyboard navigation
-   Focus states
-   Accessible forms
-   Labels
-   Alt text
-   ARIA where necessary
-   Good contrast
-   Large tap targets

------------------------------------------------------------------------

# 70. IMAGE STRATEGY

Use high-quality authentic destination images where available.

Image optimization:

-   Descriptive filenames
-   Alt text
-   Responsive sizes
-   Lazy loading
-   WebP/AVIF
-   Correct dimensions

Example filename:

`meghalaya-shillong-tour-ne-dhaniya.jpg`

Avoid:

`IMG_1234.jpg`

------------------------------------------------------------------------

# 71. INITIAL SEO TITLE EXAMPLES

Homepage:

**NE Dhaniya Tours & Travels \| Northeast India Tour Packages & Car
Rental**

Assam:

**Assam Tour Packages, Car Rental & Travel Services \| NE Dhaniya**

Meghalaya:

**Meghalaya Tour Packages, Taxi & Car Rental \| NE Dhaniya**

Arunachal Pradesh:

**Arunachal Pradesh Tour Packages & Taxi Service \| NE Dhaniya**

Tawang:

**Tawang Tour Packages & Taxi Service \| NE Dhaniya Tours**

Sikkim:

**Sikkim Tour Packages & Car Rental \| NE Dhaniya Tours**

Bhutan:

**Bhutan Tour Packages from Northeast India \| NE Dhaniya**

Generate unique metadata for every page.

------------------------------------------------------------------------

# 72. COMPONENT ARCHITECTURE

Create reusable components:

``` text
Header
MobileMenu
Hero
TripSearch
DestinationCard
DestinationGrid
PackageCard
PackageGrid
VehicleCard
VehicleFleet
ServiceCard
PersonalVsSharing
WhyChooseUs
BlogCard
BlogGrid
FAQ
Breadcrumb
WhatsAppCTA
EnquiryForm
Footer
```

Admin components:

``` text
AdminSidebar
AdminHeader
DashboardCard
DataTable
RichTextEditor
MediaPicker
SeoEditor
PublishControls
PreviewButton
EnquiryTable
```

------------------------------------------------------------------------

# 73. NEXT.JS ROUTING

Use dynamic routes:

``` text
app/destinations/[state]/page.tsx
app/destinations/[state]/[place]/page.tsx
app/tour-packages/[slug]/page.tsx
app/blog/[slug]/page.tsx
app/car-rental/[destination]/page.tsx
```

Use Server Components for public content by default.

Use Client Components only where interactivity is required.

------------------------------------------------------------------------

# 74. STATIC GENERATION / REVALIDATION

Use appropriate Next.js static generation and revalidation.

Content flow:

``` text
Admin publishes content
       ↓
Firestore updated
       ↓
Revalidation triggered
       ↓
Public page updated
       ↓
Sitemap updated
```

Do not make the site dependent on a full rebuild after every content
update.

------------------------------------------------------------------------

# 75. ADMIN DATABASE OPERATIONS

Every create/update/delete operation should have:

-   Loading state
-   Success feedback
-   Error feedback
-   Confirmation for destructive actions
-   Validation
-   Permission check

Never silently fail.

------------------------------------------------------------------------

# 76. ADMIN DELETE POLICY

For important published content, prefer:

**Archive / Unpublish**

rather than immediate permanent deletion.

Permanent deletion should require confirmation.

------------------------------------------------------------------------

# 77. ERROR HANDLING

Create:

-   Global error handling
-   Page-level loading states
-   Firebase error handling
-   Form validation errors
-   Network error messages
-   404
-   Admin unauthorized page

Do not expose sensitive server errors to users.

------------------------------------------------------------------------

# 78. FINAL QUALITY CHECK

Before delivery verify:

## Public

-   Homepage
-   Destination pages
-   Tourist place pages
-   Package pages
-   Car rental
-   Hotel booking
-   Blog listing
-   Blog article
-   About
-   Contact
-   Privacy
-   Terms
-   404

## Admin

-   Login
-   Logout
-   Dashboard
-   Destination CRUD
-   Tourist place CRUD
-   Package CRUD
-   Vehicle CRUD
-   Blog CRUD
-   Categories
-   Media
-   Enquiries
-   Settings
-   Roles
-   Preview
-   Publish
-   Unpublish
-   Scheduling

## SEO

-   Unique metadata
-   Canonical
-   Sitemap
-   Robots
-   Schema
-   Breadcrumbs
-   Internal links
-   Semantic headings
-   Alt text
-   Correct status codes
-   Admin noindex/disallow

## Performance

-   Mobile speed
-   Desktop speed
-   Image optimization
-   Core Web Vitals
-   Minimal JavaScript
-   No unnecessary Firebase calls
-   No console errors

## Security

-   Protected admin
-   Correct Firestore rules
-   Correct Storage rules
-   No exposed secrets
-   Role enforcement
-   Validated forms

------------------------------------------------------------------------

# 79. DEVELOPMENT RULES FOR ANTIGRAVITY

Before coding:

1.  Read this entire specification.
2.  Inspect the project structure.
3.  Create a technical architecture.
4.  Create route architecture.
5.  Create Firebase data models.
6.  Create component architecture.
7.  Create SEO architecture.
8.  Create security rules.
9.  Then implement.

Do not start by generating random pages.

Do not remove existing functionality without explaining why.

Do not replace Next.js with React/Vite unless explicitly instructed.

Do not invent missing business information.

When a business-specific value is unavailable, create an editable
setting or placeholder.

------------------------------------------------------------------------

# 80. FINAL BUSINESS JOURNEY

The entire website should optimize this journey:

``` text
Google Search
      ↓
SEO Landing Page / Blog
      ↓
Destination
      ↓
Tour Package / Car Rental / Hotel
      ↓
Enquiry
      ↓
WhatsApp
      ↓
Travel Team
      ↓
Booking
```

------------------------------------------------------------------------

# 81. FINAL PRODUCT VISION

The final product should be more than a travel-agency website.

It should become:

**A Northeast India Travel SEO + Booking Lead Generation Platform**

The public side should continuously attract organic visitors through:

-   Destination pages
-   Tourist-place pages
-   Tour packages
-   Travel guides
-   Blog posts
-   Car rental pages
-   Hotel booking pages

The Firebase Admin Panel should allow the business to continuously
expand the website without developer involvement for normal content
operations.

The most important business conversion should remain:

**WhatsApp Enquiry**

------------------------------------------------------------------------

# 82. NON-NEGOTIABLE REQUIREMENTS

1.  Use Next.js + TypeScript.
2.  Use Firebase for Authentication, Firestore and Storage.
3.  Build a protected Admin Panel.
4.  Build a complete Blog CMS.
5.  Build Destination CMS.
6.  Build Tourist Place CMS.
7.  Build Tour Package CMS.
8.  Build Vehicle CMS.
9.  Build Enquiry Management.
10. Build SEO controls.
11. Build dynamic sitemap.
12. Build robots.txt.
13. Implement structured data.
14. Implement dynamic metadata.
15. Implement internal linking.
16. Use server-rendered/static SEO-friendly public pages.
17. Keep important public content out of client-only rendering.
18. Make WhatsApp the primary CTA.
19. Make the website fully responsive.
20. Do not fabricate business claims.
21. Do not create thin SEO pages.
22. Secure Firebase properly.
23. Optimize for Core Web Vitals.
24. Test all public and admin flows before delivery.

------------------------------------------------------------------------

# 83. FINAL INSTRUCTION TO THE AI DEVELOPER

Build the complete production-ready application according to this
specification.

Do not treat this as a simple landing-page project.

Treat it as a scalable:

**SEO-FIRST TRAVEL WEBSITE + FIREBASE CMS + ADMIN PANEL + BLOG
PLATFORM + WHATSAPP LEAD GENERATION SYSTEM**

The website should be visually premium, technically clean, fast,
accessible, secure, mobile-first and designed around real search intent.

The system should allow NE Dhaniya Tours & Travels to continuously add:

**Destinations → Tourist Places → Packages → Vehicles → Hotels → Blogs**

while automatically maintaining:

**SEO Metadata → Internal Links → Structured Data → Sitemap →
Revalidation**

The final result must be suitable for production deployment and future
SEO growth.
