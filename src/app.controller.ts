import { Controller, Get } from '@nestjs/common';
import { SupabaseService } from './supabase/supabase.service';

@Controller()
export class AppController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Get('supa')
  async getUsers() {
    const response = await this.supabaseService
      .getClient()
      .from('users')
      .select('*');

    return response;
  }
}
