# Discover Lesotho

A responsive React tourism guide introducing destinations, outdoor activities and cultural experiences across Lesotho.

## Features

- Destination home page with featured places and popular experiences
- Eight data-driven attractions with location, category, descriptions, activities and estimated costs
- Live attraction name search and category filters
- Keyboard-accessible attraction detail dialog with an enquiry shortcut
- Enquiry form with client-side validation and submission confirmation
- Responsive layouts for desktop, tablet and mobile, with breakpoints at 1000px, 700px, 390px and 280px

## Project Structure

```text
src/
  components/       Shared navigation, attraction cards, detail dialog and enquiry form
  data/             Attraction content
  photos/           Attraction image assets imported by the app
  pages/            Home and searchable attractions sections
  App.js            Application composition and selected-attraction state
  App.css           Application layout and responsive styles
  index.css         Global styles and typography
public/
```

## Run Locally

Requires Node.js and npm.

```bash
npm install
npm start
```

Run tests with `npm test -- --watchAll=false --runInBand` and create a production build with `npm run build`.

## Destination Data

Edit `src/data/attractions.js` to update destination details. Estimated prices are illustrative, shown in Lesotho loti (M), and should be confirmed with local operators before travel.

## Enquiry Validation

- Full names accept letters and spaces; numbers and symbols are removed as the user types.
- Email addresses must use a valid email format.
- Phone numbers accept 7 to 15 digits and an optional leading `+`; other characters are removed as the user types.
- Visitor counts must be positive whole numbers. The field suggests 1–20, and also accepts larger typed values.
- Visit dates must be today or later.
- Messages must contain at least 10 non-whitespace characters. The short-message warning remains visible, and the field border turns red after the user edits an invalid message.

## GitHub

Create a GitHub repository, then connect and push this project with:

```bash
git init
git add .
git commit -m "Build Lesotho tourism discovery app"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```
