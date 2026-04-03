'use client';

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

interface Reviewer {
  id: number;
  name: string;
  affiliation: string;
}

export default function ReviewerPage() {
  const [reviewers, setReviewers] = useState<Reviewer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviewers = async () => {
      try {
        const response = await fetch("/api/reviewers");
        if (!response.ok) throw new Error("Failed to fetch reviewers");
        const data = await response.json();
        setReviewers(data.reviewers);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchReviewers();
  }, []);
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Become a Reviewer</h1>
            <p className="text-xl opacity-90">Join us in ensuring academic excellence at ICRACS 2026</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Reviewers List */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">List of Reviewers</CardTitle>
              <p className="text-gray-600 text-center mt-2">ICRACS 2026 Review Panel</p>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">Loading reviewers...</p>
                </div>
              ) : error ? (
                <div className="text-center py-8">
                  <p className="text-red-600">Error: {error}</p>
                </div>
              ) : reviewers.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600">No reviewers found.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <div className="hidden md:block">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-blue-600 hover:bg-blue-600">
                          <TableHead className="w-12 text-white text-center font-bold">#</TableHead>
                          <TableHead className="min-w-[250px] text-white font-bold">Name</TableHead>
                          <TableHead className="text-white font-bold">Affiliation</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {reviewers.map((reviewer, index) => (
                          <TableRow key={reviewer.id} className="hover:bg-blue-50 border-b">
                            <TableCell className="text-center font-semibold text-gray-700 w-12 bg-gray-100">{index + 1}</TableCell>
                            <TableCell className="font-semibold text-gray-900">{reviewer.name}</TableCell>
                            <TableCell className="text-gray-700">{reviewer.affiliation}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  {/* Mobile View */}
                  <div className="md:hidden space-y-4">
                    {reviewers.map((reviewer, index) => (
                      <div key={reviewer.id} className="bg-white border border-blue-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-grow">
                            <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">Name</p>
                            <h3 className="font-semibold text-gray-900">{reviewer.name}</h3>
                          </div>
                        </div>
                        <div className="pl-11">
                          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">Affiliation</p>
                          <p className="text-sm text-gray-600">{reviewer.affiliation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}
