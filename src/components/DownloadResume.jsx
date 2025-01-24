import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  PDFDownloadLink
} from '@react-pdf/renderer';
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 10,
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  links: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 10,
  },
  link: {
    fontSize: 12,
    color: '#0066cc',
    textDecoration: 'none',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
    lineHeight: 1.5,
  },
  experienceItem: {
    marginBottom: 10,
  },
  experienceTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  experienceCompany: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  experienceDate: {
    fontSize: 12,
    color: '#666',
  },
  educationItem: {
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  skill: {
    fontSize: 12,
    backgroundColor: '#f0f0f0',
    padding: '4 8',
    borderRadius: 4,
  },
});

// Resume Document Component
const ResumePDF = ({ profile }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Sugam Chaudhary</Text>
        <Text style={styles.title}>{profile.title}</Text>
        <View style={styles.links}>
          <Link style={styles.link} src={profile.githubUrl}>GitHub</Link>
          <Link style={styles.link} src={profile.linkedinUrl}>LinkedIn</Link>
        </View>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.text}>{profile.about}</Text>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {profile.experience.map((exp, index) => (
          <View key={index} style={styles.experienceItem}>
            <Text style={styles.experienceTitle}>{exp.title}</Text>
            <Text style={styles.experienceCompany}>{exp.company}</Text>
            <Text style={styles.experienceDate}>
              {new Date(exp.startDate).toLocaleDateString()} - 
              {new Date(exp.endDate).toLocaleDateString()}
            </Text>
            <Text style={styles.text}>{exp.description}</Text>
          </View>
        ))}
      </View>

      {/* Education Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {profile.education.map((edu, index) => (
          <View key={index} style={styles.educationItem}>
            <Text style={styles.experienceTitle}>
              {edu.degree} in {edu.field}
            </Text>
            <Text style={styles.experienceCompany}>{edu.school}</Text>
            <Text style={styles.experienceDate}>
              Graduating: {edu.graduationYear}
            </Text>
          </View>
        ))}
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          {profile?.skills?.map((skill, index) => (
            <Text key={index} style={styles.skill}>
              {skill}
            </Text>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

// Download Button Component
const DownloadResume = ({ profile }) => (
  <PDFDownloadLink
    document={<ResumePDF profile={profile} />}
    fileName="resume.pdf"
  >
    {({ loading }) => (
      <Button 
        variant="outline" 
        className="border-2 border-gray-400 flex items-center gap-2"
        disabled={loading}
      >
        <FileDown className="w-4 h-4" />
        {loading ? 'Generating PDF...' : 'Download Resume'}
      </Button>
    )}
  </PDFDownloadLink>
);

export default DownloadResume;
