'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import NurseBelleImage from '../../../public/nursebelle.png';
import NurseEliasImage from '../../../public/IMG_3293.png';
import {
  ThemeProvider,
  createTheme,
  Stepper,
  Step,
  StepLabel,
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  TextField,
  Checkbox,
  Radio,
  Container,
  Paper,
  Fade,
  CircularProgress,
  Divider,
  Chip,
  StepConnector,
  stepConnectorClasses,
} from '@mui/material';
import {
  Science,
  CheckCircle,
  ArrowForward,
  ArrowBack,
  HealthAndSafety,
  Bloodtype,
  Elderly,
  Business,
  AutoFixHigh,
  Home as HomeIcon,
  LocalHospital,
  Work,
  Videocam,
  CalendarMonth,
  AccessTime,
  CreditCard,
  ShieldOutlined,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import CalendlyEmbed from '@/components/booking/CalendlyEmbed';

/* ═══════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════ */

const SERVICES = [
  {
    id: 'iv-infusions',
    title: 'IV Infusions',
    description: 'Targeted intravenous nutrient therapies for energy, immunity and recovery.',
    icon: <Science />,
    price: 220,
  },
  {
    id: 'custom-iv-drips',
    title: 'Custom IV Drips',
    description: 'Personalised formulations meticulously tailored to your clinical needs.',
    icon: <Science />,
    price: 280,
  },
  {
    id: 'health-assessments',
    title: 'Health Assessment and Blood Collection',
    description: 'Comprehensive wellness evaluations including clinical history, vitals, and standard blood collection.',
    icon: <HealthAndSafety />,
    price: 199,
  },
  {
    id: 'preventative-health',
    title: 'Integrated Health & Wellness',
    description: 'Proactive health screenings and personalised wellness strategies.',
    icon: <LocalHospital />,
    price: 180,
  },
  {
    id: 'clinical-legal',
    title: 'Clinical Legal Services',
    description: 'Expert clinical legal consulting and documentation services (Hourly rate applies).',
    icon: <Business />,
    price: 150,
  },
  {
    id: 'aged-care-ndis',
    title: 'Aged Care & NDIS',
    description: 'Professional nursing care for aged-care residents and NDIS participants.',
    icon: <Elderly />,
    price: 160,
  },
  {
    id: 'blood-collection',
    title: 'Blood Collection',
    description: 'Convenient, professional blood collection services at your preferred location.',
    icon: <Bloodtype />,
    price: 149,
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    description: 'High-performance clinical teeth whitening with protective minerals.',
    icon: <AutoFixHigh />,
    price: 250,
  },
  {
    id: 'corporate-health',
    title: 'Corporate Health Services',
    description: 'Workplace wellness programmes, health checks and team vitality packages.',
    icon: <Business />,
    price: 250,
  },
];

const IV_PACKAGES = [
  { id: 'immune', name: 'Immune Defence IV', price: 260, desc: 'High-dose vitamin C, zinc, and immune-supporting nutrients.' },
  { id: 'energy', name: 'Energy & Performance IV', price: 240, desc: 'B-complex vitamins and amino acids for sustained energy.' },
  { id: 'beauty', name: 'Beauty & Skin Glow IV', price: 320, desc: 'Glutathione, biotin, and collagen-boosting nutrients.' },
  { id: 'detox', name: 'Detox & Liver Support IV', price: 300, desc: 'Liver-supporting antioxidants and detox nutrients.' },
  { id: 'hydration', name: 'Hydration & Recovery IV', price: 220, desc: 'Electrolytes and minerals for rapid rehydration.' },
  { id: 'athlete', name: 'Athlete Recovery IV', price: 260, desc: 'Targeted nutrients to accelerate muscle recovery.' },
];

const CUSTOM_DRIP_PACKAGES = [
  { id: 'cd-hydration', name: 'Hydration Revival Infusion', price: 280, desc: 'Vitamin C, Magnesium, B-Complex & Zinc' },
  { id: 'cd-anti', name: 'Restorative & Wellness Infusion', price: 350, desc: 'Vitamin C, Magnesium, B-Complex, Zinc & Taurine' },
  { id: 'cd-immune', name: 'Immune Defence Infusion', price: 430, desc: 'Vitamin C, B-Complex, Zinc, Selenium & Glutathione' },
  { id: 'cd-recovery', name: 'Recovery & Performance Infusion', price: 455, desc: 'Vitamin C, Magnesium, B-complex, Vitamin B12, Taurine & GB Shot' },
  { id: 'cd-calm', name: 'Calm & Restore Infusion', price: 350, desc: 'Magnesium, GABA, Taurine' },
  { id: 'cd-liver', name: 'Liver Health Support Infusion', price: 375, desc: 'Vitamin C, B-Complex, Glutathione, Glycine & B12' },
  { id: 'cd-hair', name: 'Hair, Skin & Nails Infusion', price: 395, desc: 'Vitamin C, Magnesium, B-Complex, Zinc, Biotin, Glutathione' },
  { id: 'cd-glow', name: 'The Glow Infusion', price: 420, desc: 'Vitamin C, B-Complex, Zinc & High Dose Glutathione' },
];

const CUSTOM_ADDONS = [
  { id: 'add-vitc', name: 'Vitamin C', price: 54, priceLabel: 'From $54', desc: 'Potent antioxidant protection.' },
  { id: 'add-mag', name: 'Magnesium', price: 35, desc: 'Muscle relaxation and tension relief.' },
  { id: 'add-zinc', name: 'Zinc', price: 54, desc: 'Immune support and cellular recovery.' },
  { id: 'add-bcomp', name: 'B complex', price: 54, desc: 'Nervous system support and energy.' },
  { id: 'add-bcomp-plus', name: 'B Complex Plus', price: 64, desc: 'Enhanced B-vitamin support.' },
  { id: 'add-sel', name: 'Selenium', price: 70, desc: 'Powerful antioxidant supporting thyroid and metabolic function.' },
  { id: 'add-gluta', name: 'Glutathione', price: 120, desc: 'Master antioxidant for liver detox and skin brightening.' },
  { id: 'add-gly', name: 'Glycine', price: 64, desc: 'Supports cellular health, sleep, and joint recovery.' },
  { id: 'add-gb', name: 'GB Shot', price: 64, desc: 'Potent shot for cellular wellness and recovery.' },
  { id: 'add-sd', name: 'SD Shot', price: 70, desc: 'Clinical supplemental shot for optimal performance.' },
  { id: 'add-tau', name: 'Taurine', price: 70, desc: 'Supports cardiovascular health and cellular hydration.' },
  { id: 'add-nad-100', name: 'NAD Package 100mg', price: 225, desc: 'Critical coenzyme for cellular energy and DNA repair.' },
  { id: 'add-nad-250', name: 'NAD Package 250mg', price: 475, desc: 'Critical coenzyme for cellular energy and DNA repair.' },
  { id: 'add-nad-500', name: 'NAD Package 500mg', price: 695, desc: 'Critical coenzyme for cellular energy and DNA repair.' },
];

const CUSTOM_BOOSTERS = [
  { id: 'boost-b12', name: 'Vitamin B12 Shot', price: 59, desc: 'Increase metabolism, boost energy, regulate mood, sleep and appetite.' },
  { id: 'boost-biotin', name: 'Biotin B7', price: 54, desc: 'The elixir for your hair, skin and nails to thrive.' },
  { id: 'boost-coq10', name: 'COQ10', price: 54, desc: 'Support exercise performance and recovery while helping to reduce fatigue and enhance endurance.' },
  { id: 'boost-gluta-shot', name: 'Glutathione Shot', price: 99, desc: 'May slow the ageing process as you detoxify your liver.' },
  { id: 'boost-vitd', name: 'Vitamin D', price: 99, desc: 'Helps your immune system against viruses & builds density in your bones.' },
  { id: 'boost-ala', name: 'ALA Complex', price: 58, desc: 'Powerful anti-oxidant that supports cellular energy, nerve health and metabolic balance.' },
  { id: 'boost-nad', name: 'NAD Subcutanious', price: 225, desc: 'Powerful coenzymes that enables cells to produce energy, repair DNA and regulate ageing.' },
];

const OTHER_PACKAGES = {
  'health-assessments': [
    { id: 'pkg-health-assess', name: 'Health Assessment and Blood Collection', price: 199, desc: 'Comprehensive wellness evaluations including clinical history, vitals, and standard blood collection.' }
  ],
  'preventative-health': [
    { id: 'pkg-prev-health', name: 'Integrated Health & Wellness', price: 180, desc: 'Proactive health screenings and personalised wellness strategies.' }
  ],
  'aged-care-ndis': [
    { id: 'pkg-aged-care', name: 'Aged Care & NDIS', price: 160, desc: 'Professional nursing care for aged-care residents and NDIS participants.' }
  ],
  'blood-collection': [
    { id: 'pkg-blood', name: 'Blood Collection', price: 149, desc: 'Convenient, professional blood collection services at your preferred location.' }
  ],
  'teeth-whitening': [
    { id: 'pkg-teeth-single', name: 'Single Session', price: 250, desc: '60-minute session including standard whitening and post-care guide.' },
    { id: 'pkg-teeth-triple', name: 'Triple Session', price: 259, desc: '3x intensive rounds for deep stain removal and maximum results.' },
    { id: 'pkg-teeth-couples', name: 'Couples Session', price: 499, desc: 'Simultaneous treatment for two people in one visit.' }
  ],
  'corporate-health': [
    { id: 'pkg-corp', name: 'Corporate Health Services', price: 250, desc: 'Workplace wellness programmes, health checks and team vitality packages.' }
  ],
  'clinical-legal': [
    { id: 'pkg-legal', name: 'Clinical Legal Services', price: 150, priceLabel: '$150 / hr', desc: 'Expert clinical legal consulting and documentation services (Hourly rate applies).' }
  ],
};

const APPOINTMENT_TYPES = [
  { id: 'home-visit', title: 'Home Visit', description: 'Our clinical team comes to your home', icon: <HomeIcon />, emoji: '🏠' },
  { id: 'corporate-visit', title: 'Corporate / Workplace Visit', description: 'Onsite nursing at your workplace', icon: <Work />, emoji: '🏢' },
  { id: 'teleconsultation', title: 'Teleconsultation', description: 'Virtual consultation via secure video link', icon: <Videocam />, emoji: '💻' },
];

const NURSES = [
  {
    id: 'belle',
    name: 'Nurse Belle',
    image: NurseBelleImage,
    // desc: 'Registered Nurse with 8 years clinical experience in IV therapy and restorative care.'
  },
  {
    id: 'elias',
    name: 'Nurse Elias',
    image: NurseEliasImage,
    // desc: 'Registered Nurse specialising in clinical health assessments and health & wellness support.'
  }
];


const STEP_LABELS = ['Services', 'Packages', 'Nurse', 'Appointment', 'Details', 'Date & Time', 'Summary', 'Payment'];

const STEP_META = [
  { label: 'Select Services', sub: 'Choose one or more clinical services you need' },
  { label: 'Select Packages', sub: 'Customise your formulations based on the selected services' },
  { label: 'Select Your Nurse', sub: 'Choose your preferred healthcare professional for this session' },
  { label: 'Appointment Type', sub: 'How would you like to receive care?' },
  { label: 'Personal Details', sub: 'Tell us a little about yourself' },
  { label: 'Date & Time', sub: 'Pick your preferred appointment slot' },
  { label: 'Summary & Review', sub: 'Review your booking before payment' },
  { label: 'Payment', sub: 'Complete your booking securely' },
];

/* ═══════════════════════════════════════════════════
   CUSTOM STEPPER STYLES
   ═══════════════════════════════════════════════════ */

const CustomConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: { top: 18 },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: { borderColor: '#ca1254' },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: { borderColor: '#ca1254' },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#e8e8f0',
    borderTopWidth: 2,
    borderRadius: 1,
  },
}));

const CustomStepIconRoot = styled('div')(({ ownerState }) => ({
  width: 36,
  height: 36,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  fontSize: '0.75rem',
  fontWeight: 800,
  fontFamily: "'DM Sans', sans-serif",
  transition: 'all 0.3s ease',
  ...(ownerState.completed && {
    background: '#ca1254',
    color: '#fff',
  }),
  ...(ownerState.active && {
    background: '#ca1254',
    color: '#fff',
    boxShadow: '0 0 0 4px rgba(202,18,84,0.15)',
  }),
  ...(!ownerState.active &&
    !ownerState.completed && {
    background: '#f0f0f7',
    color: '#9999b0',
  }),
}));

function CustomStepIcon(props) {
  const { active, completed, icon } = props;
  return (
    <CustomStepIconRoot ownerState={{ active, completed }}>
      {completed ? <CheckCircle sx={{ fontSize: 18 }} /> : icon}
    </CustomStepIconRoot>
  );
}

/* ═══════════════════════════════════════════════════
   MUI THEME
   ═══════════════════════════════════════════════════ */

const theme = createTheme({
  palette: {
    primary: { main: '#ca1254' },
    secondary: { main: '#3b3f69' },
    background: { default: '#f7f7fc' },
  },
  typography: {
    fontFamily: "'DM Sans', 'Inter', -apple-system, sans-serif",
    h4: { fontWeight: 800, letterSpacing: '-0.03em' },
    h5: { fontWeight: 800, letterSpacing: '-0.025em' },
    h6: { fontWeight: 700, letterSpacing: '-0.01em' },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          borderRadius: 4,
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
        containedPrimary: {
          backgroundColor: '#ca1254',
          color: '#fff',
          padding: '12px 32px',
          '&:hover': { backgroundColor: '#a80e47', transform: 'translateY(-1px)' },
          '&:disabled': { background: '#e8e8f0', color: '#b0b0c8' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)',
          border: '1.5px solid #ededf5',
          borderRadius: 20,
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            backgroundColor: '#ffffff',
            '& fieldset': { borderColor: '#e8e8f0', borderWidth: 1.5 },
            '&:hover fieldset': { borderColor: '#ca1254' },
            '&.Mui-focused fieldset': { borderColor: '#ca1254', borderWidth: 2 },
            '&.Mui-error fieldset': { borderColor: '#d32f2f' },
          },
        },
      },
    },
  },
});

const TIME_SLOTS = [
  '06:00 AM - 07:00 AM', '07:00 AM - 08:00 AM', '08:00 AM - 09:00 AM', '09:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '12:00 PM - 01:00 PM', '01:00 PM - 02:00 PM',
  '02:00 PM - 03:00 PM', '03:00 PM - 04:00 PM', '04:00 PM - 05:00 PM', '05:00 PM - 06:00 PM',
  '06:00 PM - 07:00 PM', '07:00 PM - 08:00 PM', '08:00 PM - 09:00 PM',
];

export default function BookingPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const [bookingData, setBookingData] = useState({
    selectedServices: [],
    selectedPackages: [],
    selectedNurse: null,
    appointmentType: null,
    userDetails: { name: '', email: '', phone: '', address: '' },
    selectedDate: '',
    selectedTime: '',
  });

  const [touched, setTouched] = useState({
    name: false, email: false, phone: false, address: false,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeStep]);

  const handleNext = () => {
    if (activeStep === 3) {
      setTouched({ name: false, email: false, phone: false, address: false });
    }
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleCompleteBooking = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...bookingData,
          total: calculateTotal()
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to dispatch booking emails.');
      }

      setConfirmed(true);
    } catch (error) {
      console.error("Booking submission error:", error);
      setErrorMessage(error.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const updateBookingData = useCallback((key, value) => {
    setBookingData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleTouch = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const isTeleconsultationOnly = bookingData.appointmentType?.id === 'teleconsultation';
  const needsAddress = bookingData.appointmentType?.id === 'home-visit' || bookingData.appointmentType?.id === 'corporate-visit';
  const showClinicAddress = false;

  const calculateTotal = () => {
    let total = 0;
    // Base prices are now handled entirely by the selection in Step 1 (Packages)
    bookingData.selectedPackages.forEach(pkg => {
      total += pkg.price;
    });
    return total;
  };

  const validateForm = () => {
    const errors = {};
    if (!bookingData.userDetails.name.trim()) errors.name = 'Full name is required';
    if (!bookingData.userDetails.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.email = 'Valid email is required';
    if (!bookingData.userDetails.phone.match(/^\+?[\d\s-]{8,}$/)) errors.phone = 'Valid phone number is required';
    if (needsAddress && !bookingData.userDetails.address.trim()) errors.address = 'Service address is required';
    return errors;
  };

  const isStepValid = () => {
    switch (activeStep) {
      case 0: return bookingData.selectedServices.length > 0;
      case 1: return bookingData.selectedPackages.length > 0;
      case 2: return !!bookingData.selectedNurse;
      case 3: return !!bookingData.appointmentType;
      case 4: return Object.keys(validateForm()).length === 0;
      case 5:
        if (isTeleconsultationOnly) return true;
        return bookingData.selectedDate && bookingData.selectedTime;
      default: return true;
    }
  };

  const toggleService = (service) => {
    setBookingData((prev) => {
      const exists = prev.selectedServices.find((s) => s.id === service.id);
      let newServices;
      let newPackages = [...prev.selectedPackages];

      if (exists) {
        newServices = prev.selectedServices.filter((s) => s.id !== service.id);
        // Clear dependent packages if removing the service
        if (service.id === 'iv-infusions') {
          newPackages = newPackages.filter(p => !IV_PACKAGES.find(iv => iv.id === p.id));
        } else if (service.id === 'custom-iv-drips') {
          newPackages = newPackages.filter(p => !CUSTOM_DRIP_PACKAGES.find(cd => cd.id === p.id) && !CUSTOM_ADDONS.find(ca => ca.id === p.id) && !CUSTOM_BOOSTERS.find(cb => cb.id === p.id));
        } else if (OTHER_PACKAGES[service.id]) {
          newPackages = newPackages.filter(p => !OTHER_PACKAGES[service.id].find(op => op.id === p.id));
        }
      } else {
        newServices = [...prev.selectedServices, service];
      }

      return { ...prev, selectedServices: newServices, selectedPackages: newPackages };
    });
  };

  const togglePackage = (pkg) => {
    setBookingData((prev) => {
      const exists = prev.selectedPackages.find((p) => p.id === pkg.id);
      return {
        ...prev,
        selectedPackages: exists
          ? prev.selectedPackages.filter((p) => p.id !== pkg.id)
          : [...prev.selectedPackages, pkg],
      };
    });
  };

  const renderStep = (step) => {
    switch (step) {

      /* ─── STEP 0: SELECT SERVICES ─── */
      case 0:
        return (
          <Fade in timeout={400}>
            <Box sx={{ maxWidth: 860, mx: 'auto' }}>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                {SERVICES.map((s) => {
                  const selected = !!bookingData.selectedServices.find((sel) => sel.id === s.id);
                  return (
                    <Paper
                      key={s.id}
                      onClick={() => toggleService(s)}
                      elevation={0}
                      sx={{
                        p: 3, border: '1.5px solid', borderColor: selected ? '#ca1254' : '#ededf5',
                        bgcolor: selected ? '#fef5f8' : 'white', borderRadius: 4, cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        display: 'flex', flexDirection: 'column', height: '100%',
                        '&:hover': { borderColor: '#ca1254', transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(202,18,84,0.08)' },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                        <Box sx={{ width: 44, height: 44, borderRadius: 2, bgcolor: selected ? '#ca125420' : '#f4f4fa', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          {React.cloneElement(s.icon, { sx: { fontSize: 24, color: selected ? '#ca1254' : '#8888a8' } })}
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography fontWeight={700} color="secondary" fontSize="1.05rem" mb={0.25}>{s.title}</Typography>
                          <Typography variant="body2" color="textSecondary" lineHeight={1.5}>{s.description}</Typography>
                        </Box>
                        <Checkbox checked={selected} onClick={(e) => e.stopPropagation()} onChange={() => toggleService(s)} color="primary" sx={{ p: 0, mt: 0.25 }} />
                      </Box>
                      <Box sx={{ mt: 'auto', pt: 1.5, borderTop: '1px solid #ededf5', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="caption" color="textSecondary">Starting from</Typography>
                        <Typography variant="subtitle2" color="primary" fontWeight={800}>${s.price}</Typography>
                      </Box>
                    </Paper>
                  );
                })}
              </Box>

              {bookingData.selectedServices.length > 0 && (
                <Fade in timeout={300}>
                  <Box sx={{ mt: 4, p: 2.5, borderRadius: 3, bgcolor: '#fef5f8', border: '1.5px solid #ca125420', display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center' }}>
                    <Typography variant="caption" sx={{ color: '#ca1254', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, mr: 1 }}>
                      Selected ({bookingData.selectedServices.length}):
                    </Typography>
                    {bookingData.selectedServices.map((s) => (
                      <Chip key={s.id} label={s.title} size="small" onDelete={() => toggleService(s)} sx={{ bgcolor: 'white', border: '1px solid #ca125430', color: '#ca1254', fontWeight: 700 }} />
                    ))}
                  </Box>
                </Fade>
              )}
            </Box>
          </Fade>
        );

      /* ─── STEP 1: SELECT PACKAGES ─── */
      case 1:
        return (
          <Fade in timeout={400}>
            <Box sx={{ maxWidth: 860, mx: 'auto' }}>
              <Box sx={{ mb: 4, p: 2, borderRadius: 3, bgcolor: '#e8f4fd', border: '1px solid #b6daed', textAlign: 'center' }}>
                <Typography variant="body2" sx={{ color: '#1a6fa0', fontWeight: 600 }}>🏷️ Confirm your specific services and options. You can select multiple items.</Typography>
              </Box>
              {bookingData.selectedServices.map(service => {
                let packageSections = [];

                if (service.id === 'iv-infusions') {
                  packageSections = [{ title: 'IV Infusion Services', items: IV_PACKAGES }];
                } else if (service.id === 'custom-iv-drips') {
                  packageSections = [
                    { title: 'Base Formulations', items: CUSTOM_DRIP_PACKAGES },
                    { title: 'Service Add-ons', items: CUSTOM_ADDONS },
                    { title: 'Boosters Menu', items: CUSTOM_BOOSTERS }
                  ];
                } else if (OTHER_PACKAGES[service.id]) {
                  packageSections = [{ title: `${service.title} Options`, items: OTHER_PACKAGES[service.id] }];
                }

                if (packageSections.length === 0) return null;

                return (
                  <Box key={service.id} mb={5}>
                    {packageSections.map((section, idx) => (
                      <Box key={idx} mb={4}>
                        <Typography variant="h6" color="secondary" sx={{ mb: 2.5, fontWeight: 800 }}>{section.title}</Typography>
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
                          {section.items.map((pkg) => {
                            const selected = !!bookingData.selectedPackages.find(p => p.id === pkg.id);
                            return (
                              <Paper
                                key={pkg.id}
                                onClick={() => togglePackage(pkg)}
                                elevation={0}
                                sx={{
                                  p: 3, border: '1.5px solid', borderColor: selected ? '#ca1254' : '#ededf5',
                                  bgcolor: selected ? '#fef5f8' : 'white', cursor: 'pointer', borderRadius: 4,
                                  transition: 'all 0.25s ease',
                                  display: 'flex', flexDirection: 'column', height: '100%',
                                  '&:hover': { borderColor: '#ca1254', transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(202,18,84,0.08)' }
                                }}
                              >
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                                  <Box sx={{
                                    width: 24, height: 24, borderRadius: '6px', border: selected ? '2px solid #ca1254' : '2px solid #d0d0e0',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                    bgcolor: selected ? '#ca1254' : 'transparent', mt: 0.25
                                  }}>
                                    {selected && <CheckCircle sx={{ fontSize: 18, color: '#fff' }} />}
                                  </Box>
                                  <Box sx={{ flex: 1 }}>
                                    <Typography fontWeight={700} color="secondary" fontSize="1.05rem" mb={0.25}>{pkg.name}</Typography>
                                    <Typography variant="body2" color="textSecondary" lineHeight={1.5}>{pkg.desc}</Typography>
                                  </Box>
                                </Box>
                                <Box sx={{ mt: 'auto', pt: 1.5, borderTop: '1px solid #ededf5', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                  <Typography variant="subtitle1" color="primary" fontWeight={800}>{pkg.priceLabel || `$${pkg.price}`}</Typography>
                                </Box>
                              </Paper>
                            );
                          })}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                );
              })}
            </Box>
          </Fade>
        );

      /* ─── STEP 2: SELECT NURSE ─── */
      case 2:
        return (
          <Fade in timeout={400}>
            <Box sx={{ maxWidth: 720, mx: 'auto' }}>
              <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                {NURSES.map((nurse) => {
                  const selected = bookingData.selectedNurse?.id === nurse.id;
                  return (
                    <Paper
                      key={nurse.id}
                      elevation={0}
                      onClick={() => updateBookingData('selectedNurse', nurse)}
                      sx={{
                        p: 4, border: '1.5px solid', borderColor: selected ? '#ca1254' : '#ededf5',
                        bgcolor: selected ? '#fef5f8' : 'white', borderRadius: 5, cursor: 'pointer',
                        transition: 'all 0.25s ease', flex: '1 1 280px', maxWidth: 320, minHeight: 380,
                        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                        '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 32px rgba(202,18,84,0.1)' },
                      }}
                    >
                      <Box sx={{ position: 'relative', width: 160, height: 160, borderRadius: '50%', overflow: 'hidden', mb: 3, flexShrink: 0, border: selected ? '4px solid #ca1254' : '4px solid #ededf5', transition: 'border-color 0.25s ease' }}>
                        <Image src={nurse.image} alt={nurse.name} fill style={{ objectFit: 'cover' }} />
                        {selected && (
                          <Box sx={{ position: 'absolute', bottom: 8, right: 8, bgcolor: '#ca1254', color: 'white', borderRadius: '50%', p: 0.8, display: 'flex', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                            <CheckCircle sx={{ fontSize: 22 }} />
                          </Box>
                        )}
                      </Box>
                      <Typography variant="h6" color="secondary" gutterBottom sx={{ fontWeight: 800 }}>{nurse.name}</Typography>
                      <Typography variant="body2" color="textSecondary" sx={{ mb: 3, lineHeight: 1.6, px: 1 }}>{nurse.desc}</Typography>
                      <Box sx={{ mt: 'auto', pt: 2, borderTop: '1px solid #ededf5', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="caption" sx={{ fontWeight: 800, color: '#ca1254', textTransform: 'uppercase', fontSize: '0.7rem', letterSpacing: 0.5 }}>Clinical Expert</Typography>
                        <Radio checked={selected} onChange={() => updateBookingData('selectedNurse', nurse)} color="primary" sx={{ p: 0 }} />
                      </Box>
                    </Paper>
                  );
                })}
              </Box>
            </Box>
          </Fade>
        );

      /* ─── STEP 3: APPOINTMENT TYPE ─── */
      case 3:
        return (
          <Fade in timeout={400}>
            <Box sx={{ maxWidth: 620, mx: 'auto' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {APPOINTMENT_TYPES.map((type) => {
                  const selected = bookingData.appointmentType?.id === type.id;
                  return (
                    <Paper
                      key={type.id}
                      elevation={0}
                      onClick={() => updateBookingData('appointmentType', type)}
                      sx={{
                        p: 3, border: '1.5px solid', borderColor: selected ? '#ca1254' : '#ededf5',
                        bgcolor: selected ? '#fef5f8' : 'white', borderRadius: 4, cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 8px 24px rgba(202,18,84,0.08)' },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
                        <Box sx={{ width: 52, height: 52, borderRadius: 3, bgcolor: selected ? '#ca125420' : '#f4f4fa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>
                          {type.emoji}
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography fontWeight={700} color="secondary" fontSize="1rem">{type.title}</Typography>
                          <Typography variant="body2" color="textSecondary" sx={{ mt: 0.25 }}>{type.description}</Typography>
                        </Box>
                        <Radio checked={selected} onChange={() => updateBookingData('appointmentType', type)} color="primary" sx={{ p: 0 }} />
                      </Box>
                    </Paper>
                  );
                })}
              </Box>
              {isTeleconsultationOnly && (
                <Fade in timeout={300}>
                  <Box sx={{ mt: 3, p: 2.5, borderRadius: 3, bgcolor: '#e8f4fd', border: '1px solid #b6daed' }}>
                    <Typography variant="body2" sx={{ color: '#1a6fa0', fontWeight: 600 }}>📹 Teleconsultation selected — you&apos;ll book a time slot via our secure calendar in a later step.</Typography>
                  </Box>
                </Fade>
              )}
            </Box>
          </Fade>
        );

      /* ─── STEP 4: PERSONAL DETAILS ─── */
      case 4: {
        const errors = validateForm();
        return (
          <Fade in timeout={400}>
            <Box sx={{ maxWidth: 680, mx: 'auto' }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: touched.name && errors.name ? '#d32f2f' : '#ca1254', textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb: 1 }}>Full Name *</Typography>
                  <TextField fullWidth placeholder="e.g. Jane Smith" variant="outlined" value={bookingData.userDetails.name} onChange={(e) => updateBookingData('userDetails', { ...bookingData.userDetails, name: e.target.value })} onBlur={() => handleTouch('name')} error={touched.name && !!errors.name} helperText={touched.name && errors.name} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: touched.email && errors.email ? '#d32f2f' : '#ca1254', textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb: 1 }}>Email *</Typography>
                  <TextField fullWidth type="email" placeholder="you@example.com" variant="outlined" value={bookingData.userDetails.email} onChange={(e) => updateBookingData('userDetails', { ...bookingData.userDetails, email: e.target.value })} onBlur={() => handleTouch('email')} error={touched.email && !!errors.email} helperText={touched.email && errors.email} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: touched.phone && errors.phone ? '#d32f2f' : '#ca1254', textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb: 1 }}>Phone Number *</Typography>
                  <TextField fullWidth type="tel" placeholder="+61 400 000 000" variant="outlined" value={bookingData.userDetails.phone} onChange={(e) => updateBookingData('userDetails', { ...bookingData.userDetails, phone: e.target.value })} onBlur={() => handleTouch('phone')} error={touched.phone && !!errors.phone} helperText={touched.phone && errors.phone} />
                </Grid>
                {needsAddress && (
                  <Grid item xs={12}>
                    <Fade in timeout={300}>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 700, color: touched.address && errors.address ? '#d32f2f' : '#ca1254', textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb: 1 }}>Service Address *</Typography>
                        <TextField fullWidth placeholder="Street address, suburb and postcode" variant="outlined" value={bookingData.userDetails.address} onChange={(e) => updateBookingData('userDetails', { ...bookingData.userDetails, address: e.target.value })} onBlur={() => handleTouch('address')} error={touched.address && !!errors.address} helperText={touched.address && errors.address} />
                      </Box>
                    </Fade>
                  </Grid>
                )}
              </Grid>
            </Box>
          </Fade>
        );
      }

      /* ─── STEP 5: DATE & TIME ─── */
      case 5:
        return (
          <Fade in timeout={400}>
            <Box>
              {isTeleconsultationOnly ? (
                <Box>
                  <Box sx={{ mb: 3, textAlign: 'center' }}>
                    <Chip icon={<Videocam sx={{ fontSize: 16 }} />} label="Teleconsultation — Select an available time slot via Calendly" sx={{ bgcolor: '#e8f4fd', color: '#1a6fa0', fontWeight: 700, fontSize: '0.8rem', py: 2.5, px: 1.5, '& .MuiChip-icon': { color: '#1a6fa0' } }} />
                  </Box>
                  <Paper sx={{ bgcolor: 'white', p: { xs: 1, md: 4 }, borderRadius: 4, border: '1.5px solid #ededf5', overflow: 'hidden' }}>
                    <CalendlyEmbed url="https://calendly.com/d/cys5-44x-y4h/meeting" />
                  </Paper>
                </Box>
              ) : (
                <Box sx={{ maxWidth: 840, mx: 'auto' }}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={5}>
                      <Paper sx={{ p: 3, borderRadius: 4, border: '1.5px solid #ededf5', bgcolor: 'white', height: '100%' }} elevation={0}>
                        <Typography variant="caption" sx={{ fontWeight: 700, color: '#ca1254', textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb: 2 }}><CalendarMonth sx={{ fontSize: 18, verticalAlign: 'middle', mr: 0.5, mt: -0.2 }} /> Select Date</Typography>
                        <TextField fullWidth type="date" variant="outlined" value={bookingData.selectedDate} onChange={(e) => updateBookingData('selectedDate', e.target.value)} InputLabelProps={{ shrink: true }} inputProps={{ min: new Date().toISOString().split('T')[0] }} sx={{ '& .MuiOutlinedInput-root': { bgcolor: '#f4f4fa' } }} />
                        <Box sx={{ mt: 4, p: 2, borderRadius: 2, bgcolor: '#fef5f8', border: '1px dashed #ca125440' }}>
                          <Typography variant="body2" sx={{ color: '#ca1254', fontWeight: 600, display: 'flex', gap: 1 }}><AccessTime sx={{ fontSize: 18 }} /> Appointments run for approximately 1 hour.</Typography>
                        </Box>
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Paper sx={{ p: 3, borderRadius: 4, border: '1.5px solid #ededf5', bgcolor: 'white', height: '100%' }} elevation={0}>
                        <Typography variant="caption" sx={{ fontWeight: 700, color: '#ca1254', textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb: 2.5 }}><AccessTime sx={{ fontSize: 18, verticalAlign: 'middle', mr: 0.5, mt: -0.2 }} /> Select Time Slot</Typography>
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 1.5 }}>
                          {TIME_SLOTS.map((slot) => {
                            const selected = bookingData.selectedTime === slot;
                            return (
                              <Paper key={slot} elevation={0} onClick={() => updateBookingData('selectedTime', slot)} sx={{ py: 1.5, px: 1, textAlign: 'center', cursor: 'pointer', borderRadius: 2, border: '1.5px solid', borderColor: selected ? '#ca1254' : '#ededf5', bgcolor: selected ? '#ca1254' : '#f4f4fa', color: selected ? 'white' : '#3b3f69', transition: 'all 0.2s ease', '&:hover': { borderColor: '#ca1254', bgcolor: selected ? '#ca1254' : '#fef5f8', color: selected ? 'white' : '#ca1254' } }}>
                                <Typography variant="body2" fontWeight={selected ? 700 : 600} sx={{ fontSize: '0.85rem' }}>{slot}</Typography>
                              </Paper>
                            );
                          })}
                        </Box>
                      </Paper>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Box>
          </Fade>
        );

      /* ─── STEP 6: SUMMARY & REVIEW ─── */
      case 6:
        return (
          <Fade in timeout={400}>
            <Box sx={{ maxWidth: 700, mx: 'auto' }}>
              <Box sx={{ mb: 4, p: 2, borderRadius: 3, bgcolor: '#e8f4fd', border: '1px solid #b6daed', textAlign: 'center' }}>
                <Typography variant="body2" sx={{ color: '#1a6fa0', fontWeight: 600 }}>📋 Review your booking details carefully before proceeding to payment</Typography>
              </Box>
              <Box sx={{ p: 4, bgcolor: '#ffffff', borderRadius: 4, mb: 3, border: '1.5px solid #ededf5', boxShadow: '0 4px 24px rgba(0,0,0,0.04)' }}>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="caption" sx={{ color: '#ca1254', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb: 1.5 }}>Clinical Selections</Typography>
                  {bookingData.selectedPackages.map(p => (
                    <Box key={p.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.75 }}>
                      <Typography variant="body2" fontWeight={600} color="secondary">{p.name}</Typography>
                      <Typography variant="body2" fontWeight={700} color="primary">{p.priceLabel || `$${p.price}`}</Typography>
                    </Box>
                  ))}
                </Box>

                <Divider sx={{ my: 2.5 }} />

                <Box sx={{ mb: 3 }}>
                  <Typography variant="caption" sx={{ color: '#ca1254', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb: 1 }}>Selected Nurse</Typography>
                  <Typography variant="body1" fontWeight={700} color="secondary">
                    {bookingData.selectedNurse?.name || '—'}
                  </Typography>
                </Box>

                <Divider sx={{ my: 2.5 }} />

                <Grid container spacing={3} sx={{ mb: 1 }}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="caption" sx={{ color: '#ca1254', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb: 0.5 }}>Appointment Type</Typography>
                    <Typography variant="body1" fontWeight={700} color="secondary">{bookingData.appointmentType?.title || '—'}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="caption" sx={{ color: '#ca1254', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb: 0.5 }}>Date & Time</Typography>
                    <Typography variant="body1" fontWeight={700} color="secondary">
                      {isTeleconsultationOnly ? 'Scheduled via Calendly' : bookingData.selectedDate && bookingData.selectedTime ? `${new Date(bookingData.selectedDate).toLocaleDateString('en-AU')} | ${bookingData.selectedTime}` : '—'}
                    </Typography>
                  </Grid>
                </Grid>

                {needsAddress && (
                  <>
                    <Divider sx={{ my: 2.5 }} />
                    <Box>
                      <Typography variant="caption" sx={{ color: '#ca1254', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb: 0.5 }}>Address</Typography>
                      <Typography variant="body1" fontWeight={700} color="secondary">{bookingData.userDetails.address || '—'}</Typography>
                    </Box>
                  </>
                )}

                <Divider sx={{ my: 2.5 }} />
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="caption" sx={{ color: '#ca1254', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb: 0.5 }}>Name</Typography>
                    <Typography variant="body2" fontWeight={700} color="secondary">{bookingData.userDetails.name || '—'}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="caption" sx={{ color: '#ca1254', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb: 0.5 }}>Email</Typography>
                    <Typography variant="body2" fontWeight={700} color="secondary">{bookingData.userDetails.email || '—'}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="caption" sx={{ color: '#ca1254', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb: 0.5 }}>Phone</Typography>
                    <Typography variant="body2" fontWeight={700} color="secondary">{bookingData.userDetails.phone || '—'}</Typography>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{ p: 3.5, borderRadius: 4, background: 'linear-gradient(135deg, #3b3f69 0%, #2e3257 100%)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, display: 'block' }}>Estimated Total</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mt: 0.3 }}>Includes all selected services</Typography>
                </Box>
                <Typography variant="h4" sx={{ color: '#fff', fontWeight: 900, letterSpacing: '-0.03em' }}>${calculateTotal()}</Typography>
              </Box>
            </Box>
          </Fade>
        );

      /* ─── STEP 7: PAYMENT ─── */
      case 7:
        return (
          <Fade in timeout={400}>
            <Box sx={{ maxWidth: 520, mx: 'auto' }}>
              {confirmed ? (
                <Fade in timeout={600}>
                  <Box sx={{ textAlign: 'center', py: 6 }}>
                    <Box sx={{ width: 88, height: 88, borderRadius: '50%', bgcolor: '#e6f7ed', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 3 }}>
                      <CheckCircle sx={{ fontSize: 48, color: '#28a745' }} />
                    </Box>
                    <Typography variant="h5" color="secondary" sx={{ mb: 1 }}>Booking Confirmed!</Typography>
                    <Typography variant="body1" color="textSecondary" sx={{ mb: 1, maxWidth: 400, mx: 'auto' }}>
                      Thank you for choosing Wellness Vitality Australia. Our clinical team will be in touch shortly to confirm your appointment.
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ca1254', fontWeight: 700, mb: 4 }}>
                      A confirmation email has been sent to {bookingData.userDetails.email}
                    </Typography>
                    <Button
                      variant="outlined" color="secondary"
                      onClick={() => {
                        setActiveStep(0);
                        setConfirmed(false);
                        setBookingData({ selectedServices: [], selectedPackages: [], selectedNurse: null, appointmentType: null, userDetails: { name: '', email: '', phone: '', address: '' }, selectedDate: '', selectedTime: '' });
                        setTouched({ name: false, email: false, phone: false, address: false });
                      }}
                      sx={{ borderRadius: 50, px: 4, py: 1.5, fontWeight: 700, borderWidth: 2 }}
                    >
                      Book Another Appointment
                    </Button>
                  </Box>
                </Fade>
              ) : (
                <>
                  <Box sx={{ p: 3, mb: 4, borderRadius: 3, bgcolor: '#fef5f8', border: '1.5px solid #ca125430', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#ca1254', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>Total Due</Typography>
                      <Typography variant="h5" color="primary" fontWeight={900}>${calculateTotal()}</Typography>
                    </Box>
                    <Chip label="All Inclusive" sx={{ bgcolor: 'white', border: '1px solid #ca125430', color: '#ca1254', fontWeight: 700 }} />
                  </Box>

                  {errorMessage && (
                    <Box sx={{ p: 2, mb: 3, borderRadius: 2, bgcolor: '#fff0f0', border: '1px solid #ffcccc', color: '#d32f2f' }}>
                      <Typography variant="body2" fontWeight="bold">{errorMessage}</Typography>
                    </Box>
                  )}

                  <Paper
                    elevation={0}
                    onClick={() => !loading && handleCompleteBooking()}
                    sx={{ p: { xs: 2.5, sm: 3 }, mb: 3, border: '2px solid #e2e8f0', borderRadius: 4, bgcolor: '#f8fafc', cursor: loading ? 'default' : 'pointer', opacity: loading ? 0.7 : 1, transition: 'all 0.2s', '&:hover': !loading ? { borderColor: '#635bff', transform: 'translateY(-2px)', boxShadow: '0 8px 25px rgba(99,91,255,0.15)' } : {} }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
                          <Typography fontWeight={800} color="secondary" variant="body1">Pay with Stripe</Typography>
                          <Chip label="100% Secure" size="small" sx={{ bgcolor: '#ede9fe', color: '#635bff', fontWeight: 700, fontSize: '0.65rem', height: 20 }} />
                        </Box>
                        <Typography variant="body2" color="textSecondary" sx={{ mb: 1.5, maxWidth: 350 }}>
                          Complete your booking safely and instantly using any major credit or debit card.
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="caption" sx={{ fontWeight: 600, color: '#64748b', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <CreditCard sx={{ fontSize: 14 }} /> Apple Pay, Google Pay, Visa & Mastercard
                          </Typography>
                        </Box>
                      </Box>

                      {loading ? (
                        <CircularProgress size={24} sx={{ color: '#635bff' }} />
                      ) : (
                        <Box sx={{ width: 44, height: 44, borderRadius: '50%', bgcolor: 'white', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', flexShrink: 0 }}>
                          <ArrowForward sx={{ fontSize: 20, color: '#635bff' }} />
                        </Box>
                      )}
                    </Box>
                  </Paper>

                  <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', alignItems: 'center', color: '#8888a8' }}>
                    <ShieldOutlined sx={{ fontSize: 14 }} />
                    <Typography variant="caption" color="textSecondary">Payments are encrypted and processed securely by Stripe</Typography>
                  </Box>
                </>
              )}
            </Box>
          </Fade>
        );

      default:
        return null;
    }
  };

  /* ══════════════════════════════════════════════
     RENDER
     ══════════════════════════════════════════════ */

  return (
    <ThemeProvider theme={theme}>
      <main style={{ minHeight: '100vh', backgroundColor: '#f7f7fc', position: 'relative' }}>
        <Box sx={{
          position: 'sticky',
          top: { xs: 60, sm: 110 },
          mt: 0,
          zIndex: 10,
          bgcolor: '#ffffff',
          borderBottom: '1px solid #ededf5',
          boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
          pt: 0,
          pb: { xs: 1, sm: 2.5 },
          overflow: 'hidden'
        }}>
          <Box sx={{ width: '100%', height: 3, bgcolor: '#f0f0f7', mb: { xs: 0.5, sm: 2.5 } }}>
            <Box sx={{ width: `${((activeStep + 1) / STEP_LABELS.length) * 100}%`, height: '100%', bgcolor: '#ca1254', transition: 'width 0.6s cubic-bezier(0.65, 0, 0.35, 1)', boxShadow: '0 0 10px rgba(202,18,84,0.4)' }} />
          </Box>
          {/* MOBILE PROGRESS INDICATOR */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, px: 3, py: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 800, color: '#ca1254', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Stage {activeStep + 1}: {STEP_LABELS[activeStep]}
            </Typography>
            <Typography sx={{ fontWeight: 700, color: '#9999b0', fontSize: '0.65rem' }}>
              {activeStep + 1} / {STEP_LABELS.length}
            </Typography>
          </Box>
          <Container maxWidth="md" sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Stepper activeStep={activeStep} alternativeLabel connector={<CustomConnector />}>
              {STEP_LABELS.map((label, idx) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={CustomStepIcon} sx={{ '& .MuiStepLabel-label': { fontSize: '0.72rem', fontWeight: 700, mt: 0.5, color: activeStep === idx ? '#ca1254' : '#9999b0' } }}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ pt: 10, pb: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Chip label={`Step ${activeStep + 1} of ${STEP_LABELS.length}`} size="small" sx={{ mb: 2, bgcolor: '#ca125410', color: '#ca1254', fontWeight: 800, fontSize: '0.7rem', letterSpacing: 0.5 }} />
            <Typography variant="h4" color="secondary" sx={{ mb: 0.5 }}>{STEP_META[activeStep].label}</Typography>
            <Typography variant="body2" color="textSecondary" fontWeight={400}>{STEP_META[activeStep].sub}</Typography>
          </Box>

          {renderStep(activeStep)}

        </Container>

        {!confirmed && (
          <Box sx={{
            position: 'sticky',
            bottom: 0,
            zIndex: 10,
            py: { xs: 1.5, sm: 2.5 },
            px: { xs: 2, sm: 3 },
            bgcolor: 'rgba(247, 247, 252, 0.98)',
            backdropFilter: 'blur(12px)',
            borderTop: '1px solid rgba(200, 200, 220, 0.4)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 1.5, sm: 3 },
            boxShadow: '0 -4px 30px rgba(0,0,0,0.06)'
          }}>
            {activeStep !== 0 && (
              <Button onClick={handleBack} variant="text" startIcon={<ArrowBack sx={{ fontSize: 16 }} />} sx={{ color: '#9999b0', fontWeight: 700, '&:hover': { color: '#3b3f69', bgcolor: 'transparent' }, px: { xs: 1, sm: 2 } }}>
                Back
              </Button>
            )}
            {activeStep < STEP_LABELS.length - 1 && (
              <Button variant="contained" color="primary" onClick={handleNext} disabled={!isStepValid()} endIcon={<ArrowForward sx={{ fontSize: 16 }} />} sx={{ minWidth: { xs: 140, sm: 240 }, py: { xs: 1.2, sm: 1.5 }, fontSize: { xs: '0.85rem', sm: '0.95rem' }, borderRadius: '4px !important', boxShadow: 'none', '&:hover': { boxShadow: 'none', bgcolor: '#a80e47' } }}>
                Continue
              </Button>
            )}
          </Box>
        )}

        <Box sx={{ py: 6, borderTop: '1px solid #ededf5', textAlign: 'center', mt: 0, position: 'relative', zIndex: 1 }}>
          <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 2 }}>
              <Button href="/contact" variant="text" size="small" sx={{ color: '#9999b0', fontWeight: 600, fontSize: '0.82rem' }}>Clinical Support</Button>
              <Button href="/faq" variant="text" size="small" sx={{ color: '#9999b0', fontWeight: 600, fontSize: '0.82rem' }}>Help Centre</Button>
            </Box>
            <Typography variant="caption" color="textSecondary">All bookings are subject to clinical availability.</Typography>
          </Container>
        </Box>

      </main>
    </ThemeProvider>
  );
}