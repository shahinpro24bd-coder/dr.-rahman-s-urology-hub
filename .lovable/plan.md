# Import and rebrand the doctor website

## Goal
Recreate the attached website with the same page structure, section order, spacing, visual styling, and interactions, while replacing every legacy identity, image, link, and contact detail with Dr. Md. Habibur Rahman’s supplied information.

## What will be built
- Preserve the existing Home, About, Services, Gallery, Contact, and Appointment pages, including their paired language variants, header, footer, cards, forms, lightbox, mobile menu, animations, and language controls.
- Replace all references to the previous doctor, qualifications, hospital, city, contact details, metadata, and placeholder copy.
- Use these verified details consistently:
  - Dr. Md. Habibur Rahman
  - MBBS, BCS, FCPS (Urology), FACS (USA)
  - Senior Consultant & Leading Urology and Andrology Specialist
  - Dhaka, Cumilla, and online consultation
  - 01717-497858
  - বাংলা ও English
- Rework the service copy around the supplied specialties: kidney and urinary disease, stones, male infertility, azoospermia, sexual and reproductive health, pediatric urology, prostate and bladder conditions, and modern surgical care.
- Replace all old chamber references with Shamorita Hospital Ltd., Panthapath, Dhaka and Trust Care Diagnostic Center, Dhaka Udyan, Mohammadpur, Dhaka-1215.
- Keep call and WhatsApp appointment actions using the supplied number. Remove email, Facebook, old map destinations, old schedules, and any other details not supplied rather than inventing replacements.
- Use both supplied doctor photographs and create a cohesive set of clean, logo-free urology and clinical images for service cards, gallery items, and page headers.

## Technical details
- Import only safe source files from the archive; exclude repository metadata and obsolete generated output.
- Keep the existing TanStack shell and static-page design approach so the imported appearance remains faithful.
- Remove the broken legacy content-management request and cached content overrides, which could restore the previous doctor’s content.
- Update page metadata and image alternative text for every public page.
- Scan the complete imported tree for the previous doctor’s name, phone, email, hospital, Facebook URL, Rangpur references, old image paths, and placeholder content until no legacy matches remain.
- Verify desktop and mobile rendering, page navigation, language switching, service expansion, gallery lightbox, appointment forms, phone links, and WhatsApp links.

## Acceptance checks
- The original composition and visual behavior remain recognizably identical on every page.
- No old doctor identity, old contact detail, old outbound link, old medical image, or placeholder copy remains.
- Every displayed fact comes from the supplied brief; no email address, social profile, or visiting schedule is invented.
- All pages load without console errors and all appointment paths resolve to 01717-497858.
