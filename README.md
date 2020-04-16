# IHLFG 2.0

This is a revisit to a project I worked on when I was fresh out of school. This is going to be a purely frontend based concept, so there likely won't be any backend logic. All user and account information will be created and stored with dummy information inside json files in the `data` folder.

I'll keep this as up-to-date as possible for my to-do section, right now this is just a happy place for me to keep notes.

---

## To-Do

**(Pages)**

- Landing
- Dashboard (Dynamic)
- User (Dynamic)
- Account (Dynamic)
- Search Results

**(Logic)**

- User Schema
- Account Schema
- Graphs + Switch (Dynamic)

---

### Commands

- `yarn` - installs all required packages
- `yarn start` - starts the local server
- `yarn run scss` - automatic scss compiler

### Folder Structure

- `styles` - all related styling
- `data` - user and account schemas used for logging in and holding relevant account data
- `assets` - required assets (images/videos)
- `shared` - dumb components that are used on multiple pages - accessed via `shareReduce.js`
- `components` - smart components that are used as a shell for page logic
