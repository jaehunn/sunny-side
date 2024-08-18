import { Injectable } from '@nestjs/common';
import { SupabaseService } from 'src/supabase/supabase.service';

@Injectable()
export class UserService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async getUsers(): Promise<any> {
    const response = await this.supabaseService
      .getClient()
      .from('users')
      .select('*');

    console.log(response);

    return [];
  }
}
