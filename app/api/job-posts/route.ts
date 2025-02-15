// app/api/job-posts/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const jobs = await prisma.job.findMany({
    orderBy: { createdAt: 'desc' },
  });
  return NextResponse.json(jobs);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, description, rate } = body;

  if (!name || !description || !rate) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const job = await prisma.job.create({
    data: {
      name,
      description,
      rate,
    },
  });

  return NextResponse.json(job, { status: 201 });
}
